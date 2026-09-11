function activityDefaults() {
    return {
        wallpaperPlugin: "org.kde.image",
        wallpaperMode: "SingleImage",
        wallpaperSingleImage: getWallpaper()
    }
}

function getWallpaper() {
    return "/usr/share/wallpapers/org.kde.breath.desktop/contents/images/5120x2880.png"
}