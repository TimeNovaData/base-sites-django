import { task, src as _src, dest, series } from 'gulp'
import minifyJS from 'gulp-uglify'
import javascriptObfuscator from 'gulp-javascript-obfuscator'
import clean from 'gulp-clean'
import template from 'gulp-template'
import rename from 'gulp-rename'
import dom from 'gulp-dom'
import replace from 'gulp-replace'

import fs from 'fs/promises'
import path from 'path'
const paths = {
  static: 'static/',
  templates: 'ndt_tools/gulp_templates/',
  scrWebflow: 'webflow/',
  public: 'static/public/',
  src: {
    cssFolder: 'static/src/css/',
    jsFolder: 'static/src/js/',
    docsFolder: 'static/src/docs/',

    css: 'static/src/css/**/*.css',
    js: 'static/src/js/**/*.js',
  },
  dist: {
    css: 'static/dist/css',
    js: 'static/dist/js',
  },
}

async function copyDirectory(source, destination) {
  try {
    // Certifique-se de que o diretório de destino exista
    await fs.mkdir(destination, { recursive: true })

    // Leia os itens do diretório de origem
    const entries = await fs.readdir(source, { withFileTypes: true })

    // Itere sobre os itens encontrados
    for (const entry of entries) {
      const sourcePath = path.join(source, entry.name)
      const destinationPath = path.join(destination, entry.name)

      if (entry.isDirectory()) {
        // Recursivamente copie diretórios
        await copyDirectory(sourcePath, destinationPath)
      } else {
        // Copie arquivos
        await fs.copyFile(sourcePath, destinationPath)
        console.log(`Copied: ${sourcePath} -> ${destinationPath}`)
      }
    }
  } catch (error) {
    console.error(`Error copying directory: ${error}`)
  }
}

task('🟡 Limpar Pasta JS', () => {
  return _src(paths.src.jsFolder, { read: false, allowEmpty: true }).pipe(clean({ force: true }))
})

task('🔵 Limpar Pasta CSS', () => {
  return _src(paths.src.cssFolder, { read: false, allowEmpty: true }).pipe(clean({ force: true }))
})

task('🟦 Limpar Pasta DOCS', () => {
  return _src(paths.src.docsFolder, { read: false, allowEmpty: true }).pipe(clean({ force: true }))
})

task('⚡ Sobrescrever VITE CONFIG', () => {
  const variables = {
    title: 'MeuApp',
  }

  return _src(paths.templates + 'vite.config.js') // Caminho para o template JS
    .pipe(template(variables)) // Substitui as variáveis no template
    .pipe(dest('./')) // Salva o arquivo gerado no diretório de destino
})

task('🔹 Sobrescrever Tailwind CONFIG', () => {
  const variables = {
    title: 'MeuApp',
  }

  return _src(paths.templates + 'tailwind.config.js') // Caminho para o template JS
    .pipe(template(variables)) // Substitui as variáveis no template
    .pipe(dest('./')) // Salva o arquivo gerado no diretório de destino
})

task('✂️ Copiar pasta SRC', () => {
  return _src(paths.templates + 'src/**/*', { read: true, allowEmpty: true }) //
    .pipe(dest(paths.static + 'src'))
})

task('✂️ Copiar pasta PUBLIC', () => {
  return _src(paths.templates + 'public/**/*', { read: true, allowEmpty: true }) //
    .pipe(dest(paths.static + 'public'))
})

task('✂️ Copiar pasta FONTS WEBFLOW', () => {
  return _src(paths.scrWebflow + 'fonts/**/*') //
    .pipe(dest(paths.public + 'fonts'))
})

task('✂️ Copiar pasta IMAGES WEBFLOW', () => {
  const sourcePath = path.join('webflow/images')
  const destinationPath = path.join('static/public/images')

  // Execute a função de cópia
  return copyDirectory(sourcePath, destinationPath)
})

task('✂️ Copiar JS WEBFLOW', () => {
  return _src(paths.scrWebflow + 'js/webflow.js') //
    .pipe(dest(paths.public + 'vendor/'))
})

task('✂️ Copiar pasta CSS WEBFLOW', () => {
  const destFolder = paths.src.cssFolder

  return _src(paths.scrWebflow + 'css/**/*')
    .pipe(
      rename((file) => {
        if (file.basename.includes('.webflow')) file.basename = 'custom.webflow'
        return file
      })
    )
    .pipe(
      replace(
        /url\('\.\.\//g, // Busca por qualquer ocorrência de "../" dentro de url(...)
        "url('../static/" // Substitui por "../static/"
      )
    )
    .pipe(
      replace(
        /url\((['"]?)\.\.\/static\/images\/(.*?)\.(png|jpg|jpeg)(['"]?)\)/g, // Busca por imagens png, jpeg, jpg
        (match, p1, filename, ext, p4) => `url(${p1}../static/images/${filename}.webp${p4})` // substitui por webp
      )
    )
    .pipe(dest(destFolder))
})

task('🌄 Mudar src das <img />', function () {
  return _src(paths.scrWebflow + '*.html')
    .pipe(
      dom(function () {
        return this.querySelectorAll('img').forEach((img) => {
          const srcset = img.srcset.split(', ').map((i) => {
            const src = i.slice(0, i.indexOf(' '))
            return `{% static '${src}' %} ${i.slice(i.indexOf(' '))}`
          })

          if (img.srcset) {
            img.srcset = srcset.join(', ')
          }

          const src = img.src
          if (img.src) {
            img.src = `{% static '${src}' %}`
          }
        })
      })
    )
    .pipe(dest(paths.scrWebflow + '[Templates]'))
})

task('♻️ Converte imagens em WEBP', async function (done) {
  // Substitua pelo caminho do seu script
  await import('./ndt_tools/node_scripts/web_pconvert.js')
  done() // Indica que a tarefa foi concluída
})

task('📟 Minifica arquivo WEBFLOW', () => {
  return _src(paths.src.jsFolder + 'vendor/webflow.js')
    .pipe(javascriptObfuscator())
    .pipe(minifyJS()) //
    .pipe(dest(paths.src.jsFolder + 'vendor/'))
})

task('✂️ Renomear BASE.HTML', () => {
  return _src('templates/base.html', { read: true }) //
    .pipe(rename('base_old.html')) // Substitui as variáveis no template
    .pipe(dest('templates/'))
})

task('✂️ Copiar BASE.HTML', () => {
  return _src(paths.templates + 'html/base.html', { read: true }) //
    .pipe(dest('templates/'))
})

task(
  'webflow',
  series(
    '🟡 Limpar Pasta JS', //
    '🔵 Limpar Pasta CSS',
    '🟦 Limpar Pasta DOCS',
    '✂️ Copiar pasta SRC',
    '✂️ Copiar pasta FONTS WEBFLOW',
    '✂️ Copiar pasta IMAGES WEBFLOW',
    '✂️ Copiar JS WEBFLOW',
    '✂️ Copiar pasta CSS WEBFLOW',
    '✂️ Copiar pasta PUBLIC',
    '✂️ Renomear BASE.HTML',
    '✂️ Copiar BASE.HTML',
    '⚡ Sobrescrever VITE CONFIG',
    '🔹 Sobrescrever Tailwind CONFIG',
    '🌄 Mudar src/srcset das <img />'
    // '📟 Minifica arquivo WEBFLOW'
    // '♻️ Converte imagens em WEBP'
  )
)
