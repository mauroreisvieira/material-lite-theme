module.exports = [
    {
        name: "[GitGutter] Inserted",
        scope: ["markup.inserted.git_gutter"],
        foreground: "var(diffAdded)",
    },
    {
        name: "[GitGutter] Modified",
        scope: ["markup.changed.git_gutter"],
        foreground: "var(diffModified)",
    },
    {
        name: "[GitGutter] Deleted",
        scope: ["markup.deleted.git_gutter"],
        foreground: "var(diffDeleted)",
    },
    {
        name: "[GitGutter] Ignored",
        scope: ["markup.ignored.git_gutter"],
        foreground: "var(diffIgnored)",
    },
]