var sortimentApp = angular.module('sortimentApp', []);

sortimentApp.controller('sortimentCtrl', function ($scope) {
    $scope.categories = [{
        'name': "Möbler för utomhusbruk",
        'link': "mobler.html",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Äta",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Skrivbord",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Speglar",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Barnens IKEA",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Tillaga",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Badrumsförvaring",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Sängar & madrasser",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Stolar",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Klädförvaring",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Dekoration",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Golv",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "IKEA FAMILY produkter",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Köksskåp & vitvaror",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Belysning",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Småförvaring",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Soffor & fåtöljer",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Förvaringsmöbler",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Bord",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Textil & Mattor",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "Verktyg & beslag",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }, {
        'name': "TV & mediaförvaring",
        'link': "",
        'imgalt': "Beskrivning för kategorin",
        'img': "http://www.ikea.com/se/sv/media/categories/seo_image/Sovrumsf%C3%B6rvaring%20fr%C3%A5n%20IKEA__bedroom_storage_340.jpg"
    }];
});