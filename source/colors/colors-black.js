const Color = require("color")
const colors = require("./common-colors")

colors.principal = colors.black
colors.principal_0 = Color.rgb(20, 20, 20)
colors.principal_1 = Color.rgb(40, 40, 40)
colors.principal_2 = Color.rgb(60, 60, 60)
colors.principal_3 = Color.rgb(80, 80, 80)
colors.principal_4 = Color.rgb(120, 120, 120)
colors.principal_5 = Color.rgb(150, 150, 150)

colors.text = Color.rgb(200, 200, 200)

colors.gitInsertedBg = Color.rgb(5, 20, 5)
colors.gitRemovedBg = Color.rgb(20, 0, 0)
colors.gitIgnoreExplorer = colors.principal_0.lighten(1.5)

//INTERFACE COLORS
colors.interBackground = colors.principal
colors.interBorder = colors.principal_1
colors.notificationBadge = colors.white

// SYNTAX COLORS
colors.variable = colors.syntaxYellow
colors.variableProperty = colors.text
colors.contrastText = colors.syntaxRed
colors.variableInstance = colors.syntaxOrange
colors.specialWordA = colors.syntaxBlue
colors.specialWordB = colors.syntaxViolet
colors.specialWordC = colors.syntaxPurple
colors.functionName = colors.syntaxCyan
colors.string = colors.syntaxGreen
colors.operator = colors.contrastText
colors.regularText = colors.text
colors.number = colors.syntaxOrange
colors.boolean = colors.contrastText
colors.nullUnd = colors.contrastText
colors.punctuation = colors.regularText
colors.deprecated = colors.danger
colors.comment = Color.rgb(100, 120, 130)

// Markup
colors.htmlTag = colors.contrastText
colors.metaTag = colors.text
colors.tagAttribute = colors.specialWordB
colors.pugClass = colors.variable

// Stylesheets
colors.cssAttribute = colors.syntaxGreen
colors.cssValue = colors.syntaxOrange
colors.cssTag = colors.syntaxRed
colors.cssClass = colors.syntaxYellow
colors.cssId = colors.syntaxBlue
colors.cssProperty = colors.syntaxCyan
colors.cssUnits = colors.number
colors.cssSpecialWord = colors.syntaxViolet
colors.cssPseudoClass = colors.syntaxPurple
colors.sassFunction = colors.syntaxBlue
colors.sassInterpolation = colors.syntaxRed

module.exports = colors