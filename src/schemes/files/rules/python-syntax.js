module.exports = [
    {
        name: "[Python] Variables",
        scope: [
            "source.python meta.function.parameters.python variable.parameter.python",
            "source.python meta.function-call.arguments.python variable.parameter.python",
        ],
        foreground: "var(orange)",
    },
    {
        name: "[Python] Function Arguments",
        scope: [
            "source.python meta.function-call.arguments.python meta.qualified-name.python meta.generic-name.python",
        ],
        foreground: "var(foreground)",
    },
    {
        name: "[Python] Statement While",
        scope: [
            "source.python meta.statement.while.python constant.language.python",
            "source.python constant.language.python",
        ],
        foreground: "var(pink)",
    },
    {
        name: "[Python] Annotation",
        scope: [
            "source.python meta.function.parameters.annotation.python meta.qualified-name.python support.type.python",
        ],
        foreground: "var(yellow)",
    },
    {
        name: "[Python] Print",
        scope: [
            "source.python keyword.other.print.python",
            "source.python meta.function-call.python meta.qualified-name.python variable.function.python support.function.builtin.python",
        ],
        font_style: "normal",
        foreground: "var(pink)",
    },
    {
        name: "[Python] Function Parameters",
        scope: [
            "source.python meta.item-access.arguments.python meta.qualified-name.python meta.generic-name.python",
            "source.python meta.item-access.arguments.python meta.qualified-name.python support.type.python",
            "source.python meta.function.parameters.annotation.python meta.item-access.arguments.python meta.qualified-name.python support.type.python",
        ],
        foreground: "var(green)",
    },
    {
        name: "[Python] Generic Name",
        scope: [
            "source.python meta.function.parameters.annotation.python meta.item-access.arguments.python meta.item-access.python meta.qualified-name.python meta.generic-name.python",
        ],
        foreground: "var(blue)",
    },
    {
        name: "[Python] Exception",
        scope: [
            "source.python meta.statement.raise.python meta.function-call.python meta.qualified-name.python variable.function.python support.type.exception.python",
        ],
        foreground: "var(red)",
    },
    {
        name: "[Python] Function Parameters",
        scope: [
            "source.python meta.item-access.python meta.qualified-name.python meta.generic-name.python",
            "source.python meta.function.parameters.annotation.python meta.item-access.python meta.qualified-name.python meta.generic-name.python",
        ],
        foreground: "var(yellow)",
    },
]
