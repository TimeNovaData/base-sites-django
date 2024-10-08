
const $type = {
	Display: {
		1: {
			$type: 'typography',
			$value: {
				fontFamily: 'Inter',
				fontSize: '80px',
				fontWeight: 400,
				letterSpacing: '-5%',
				lineHeight: '80px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},
		2: {
			$type: 'typography',
			$value: {
				fontFamily: 'Inter',
				fontSize: '64px',
				fontWeight: 400,
				letterSpacing: '-5%',
				lineHeight: '80px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},
		'1 Bold *': {
			$type: 'typography',
			$value: {
				fontFamily: 'Inter',
				fontSize: '80px',
				fontWeight: 700,
				letterSpacing: '-5%',
				lineHeight: '80px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},
		'2 Bold *': {
			$type: 'typography',
			$value: {
				fontFamily: 'Inter',
				fontSize: '64px',
				fontWeight: 700,
				letterSpacing: '-5%',
				lineHeight: '80px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},
	},
	Title: {
		1: {
			$type: 'typography',
			$value: {
				fontFamily: 'Inter',
				fontSize: '48px',
				fontWeight: 400,
				letterSpacing: '-2%',
				lineHeight: '72px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},
		2: {
			$type: 'typography',
			$value: {
				fontFamily: 'Inter',
				fontSize: '32px',
				fontWeight: 400,
				letterSpacing: '-2%',
				lineHeight: '34px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},
		3: {
			$type: 'typography',
			$value: {
				fontFamily: 'Inter',
				fontSize: '24px',
				fontWeight: 400,
				letterSpacing: '-2%',
				lineHeight: '32px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},
		4: {
			$type: 'typography',
			$value: {
				fontFamily: 'Inter',
				fontSize: '20px',
				fontWeight: 400,
				letterSpacing: '-2%',
				lineHeight: '30px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},
	},

	Headline: {
		1: {
			$type: 'typography',
			$value: {
				fontFamily: 'Space Grotesk',
				fontSize: '18px',
				fontWeight: 500,
				letterSpacing: '-2%',
				lineHeight: '24px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},

		2: {
			$type: 'typography',
			$value: {
				fontFamily: 'Space Grotesk',
				fontSize: '16px',
				fontWeight: 500,
				letterSpacing: '-2%',
				lineHeight: '24px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},

		3: {
			$type: 'typography',
			$value: {
				fontFamily: 'Space Grotesk',
				fontSize: '14px',
				fontWeight: 500,
				letterSpacing: '-2%',
				lineHeight: '24px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},
		
	},

	Paragraph: {
		1: {
			$type: 'typography',
			$value: {
				fontFamily: 'Space Grotesk',
				fontSize: '18px',
				fontWeight: 400,
				letterSpacing: '-2%',
				lineHeight: '26px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},

		2: {
			$type: 'typography',
			$value: {
				fontFamily: 'Space Grotesk',
				fontSize: '16px',
				fontWeight: 400,
				letterSpacing: '-2%',
				lineHeight: '24px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},

		3: {
			$type: 'typography',
			$value: {
				fontFamily: 'Space Grotesk',
				fontSize: '14px',
				fontWeight: 400,
				letterSpacing: '-2%',
				lineHeight: '22px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},

		4: {
			$type: 'typography',
			$value: {
				fontFamily: 'Space Grotesk',
				fontSize: '12px',
				fontWeight: 400,
				letterSpacing: '-2%',
				lineHeight: '20px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},

		5: {
			$type: 'typography',
			$value: {
				fontFamily: 'Space Grotesk',
				fontSize: '10px',
				fontWeight: 300,
				letterSpacing: '-2%',
				lineHeight: '18px',
				textTransform: 'none',
				textDecoration: 'none',
			},
		},
		
	},

	Caps: {
		1: {
			$type: 'typography',
			$value: {
				fontFamily: 'Inter',
				fontSize: '14px',
				fontWeight: 600,
				letterSpacing: '-2%',
				lineHeight: '16px',
				textTransform: 'uppercase',
				textDecoration: 'none',
			},
		},

		2: {
			$type: 'typography',
			$value: {
				fontFamily: 'Inter',
				fontSize: '12px',
				fontWeight: 600,
				letterSpacing: '-2%',
				lineHeight: '16px',
				textTransform: 'uppercase',
				textDecoration: 'none',
			},
		},

		3: {
			$type: 'typography',
			$value: {
				fontFamily: 'Inter',
				fontSize: '10px',
				fontWeight: 600,
				letterSpacing: '-2%',
				lineHeight: '16px',
				textTransform: 'uppercase',
				textDecoration: 'none',
			},
		},		
	},
}

function toRem($value, isPercentage = false) {
	const baseFontSize = 16
	let value
	if (isPercentage) {
		value = (String($value).replace('%', '') / 100) * baseFontSize
	} else {
		value = String($value).replace('px', '')
	}
	return value / baseFontSize + 'rem'
}

function toPercent(px, base) {
	const baseValue = String(base).replace('px', '');
	return ((String(px).replace('px', '') / baseValue) * 100).toFixed() + '%';
}

function generateTypography(val) {
	const arr = Object.entries(val).map(([key, value]) => {
		const title = String(key).toLowerCase()

		const variacoes = Object.entries(value)
			.filter(([$key, $value]) => !$key.includes('*'))
			.map(([$key, { $value }]) => {


				const lineHeight = $value.lineHeight.includes('%')
					? $value.lineHeigh
					: toPercent($value.lineHeight, $value.fontSize)

				const result = {
					[`.text-${title}-${$key}`]: {
						fontSize: toRem($value.fontSize),
						letterSpacing: toRem($value.letterSpacing, true),
						textTransform: $value.textTransform,
						fontFamily: $value.fontFamily + ', sans serif'
					}
				}
				if (lineHeight) result.lineHeight = lineHeight

				return { ...result }
			})

		return variacoes
	})

	return arr.flat().reduce((acc, item) => {
		return { ...acc, ...item }
	}, {})
}

const result = generateTypography($type)

export default result