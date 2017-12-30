var imgurl = adminurl + "upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;



myApp.factory('NavigationService', function ($http) {
    var navigation = [
      
        {
            name: "User",
            sref: "",
            icon: "user",
            subnav:[
                {
                name: "Users",
                classis: "active",
                link: "#!/page/viewUser//",
                icon: "user",
              },
               
                {
                name: "User Membership",
                classis: "active",
                link: "#!/page/viewMembership//",
                icon: "user"
            },
            ]
        },
        
         {
            name: "Category",
            classis: "active",
            sref: "",
            icon: "tree",
            subnav:[{
                name: "Category",
                classis: "active",
                link: "#!/page/viewHomeCategory//",
                icon: "tree"

            },
            {
                name: "Sub Category",
                classis: "active",
                link: "#!/page/viewCategory//",
                icon: "leaf"
            }]
        },  {
            name: "Home Screen",
            classis: "active",
            sref: "",
            icon: "screen",
            subnav:[{
                name: "Home ",
                classis: "active",
                link: "#!/page/viewHomeScreen//",
                icon: "screen",
            },{
                name: "Content",
                classis: "active",
                link: "#!/page/viewHomeScreen//",
                icon: "screen",
            }]
          
        }, {
            name: "Products",
            classis: "active",
            sref: "",
            icon: "shirt",
            subnav:[{
                name: "Products",
            classis: "active",
            link: "#!/page/viewProduct//",
            icon: "shirt",
                
            },
            {
                name: "Sizes",
                classis: "active",
                link: "#!/page/viewSize//",
                icon: "shirt"
            },
            {
                name: "Brand",
                classis: "active",
                link: "#!/page/viewBrand//",
                icon: "document"
            },
            {
                name: "Collection",
                classis: "active",
                link: "#!/page/viewCollection//",
                icon: "document"
            },
            {
                name: "Fabric",
                classis: "active",
                link: "#!/page/viewFabric//",
                icon: "document"
            },
            {
                name: "Type",
                classis: "active",
                link: "#!/page/viewType//",
                icon: "document"
            },
        ]
        },  {
            name: "Buy the look",
            classis: "active",
            sref: "#!/page/viewBuythelook//",
            icon: "shirt"
        },
        {
            name: "Order",
            classis: "active",
            sref: "#!/page/viewOrder//",
            icon: "document"
        },
        {
            name: "Courier",
            classis: "active",
            sref: "#!/page/viewCourier//",
            icon: "document"
        },
        {
            name: "Blogs",
            classis: "active",
            sref: "#!/page/viewBlog//",
            icon: "document"
        },   {
            name: "BaseColor",
            classis: "active",
            sref: "#!/page/viewBaseColor//",
            icon: "document"
        },  {
            name: "Banner",
            classis: "active",
            sref: "#!/page/viewBanner//",
            icon: "document"
        }, {
            name: "Discount",
            classis: "active",
            sref: "",
            icon: "document",
            subnav:[{
                name: "Discount",
                classis: "active",
                link: "#!/page/viewDiscount//",
                icon: "document"
            }, {
                name: "Discount Type",
                classis: "active",
                link: "#!/page/viewDiscountType//",
                icon: "document"
            }, 
            {
                name: "Coupon",
                classis: "active",
                link: "#!/page/viewCoupon//",
                icon: "document"
            },]
        }, {
            name: "Home Page Blocks",
            classis: "active",
            sref: "#!/page/viewHomePageBlock//",
            icon: "document"
        }, {
            name: "Store Locator",
            classis: "active",
            sref: "#!/page/viewStoreLocator//",
            icon: "document"
        },
        {
            name: "Settings",
            classis: "active",
            sref: "",
            icon: "document"
        },
        {
            name: "Channels",
            classis: "active",
            sref: "",
            icon: "document"
        },
        {
            name: "Marketing",
            classis: "active",
            sref: "",
            icon: "document",
            subnav:[{
                name: "Email Marketing",
                classis: "active",
                link: "",
                icon: "document",
            }]
        }
    ];

    return {
        getnav: function () {
            return navigation;
        },

        parseAccessToken: function (data, callback) {
            if (data) {
                $.jStorage.set("accessToken", data);
                callback();
            }
        },
        removeAccessToken: function (data, callback) {
            $.jStorage.flush();
        },
        profile: function (callback, errorCallback) {
            var data = {
                accessToken: $.jStorage.get("accessToken")
            };
            $http.post(adminurl + 'user/profile', data).then(function (data) {
                data = data.data;
                if (data.value === true) {
                    $.jStorage.set("profile", data.data);
                    callback();
                } else {
                    errorCallback(data.error);
                }
            });
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

        search: function (url, formData, i, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        delete: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        countrySave: function (formData, callback) {
            $http.post(adminurl + 'country/save', formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },

        apiCall: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        searchCall: function (url, formData, i, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },

        getOneCountry: function (id, callback) {
            $http.post(adminurl + 'country/getOne', {
                _id: id
            }).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        getLatLng: function (address, i, callback) {
            $http({
                url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyC62zlixVsjaq4zDaL4cefNCubjCgxkte4",
                method: 'GET',
                withCredentials: false,
            }).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        uploadExcel: function (form, callback) {
            $http.post(adminurl + form.model + '/excelUpload', {
                file: form.file
            }).then(function (data) {
                data = data.data;
                callback(data);

            });

        },
        shippedProductEmail: function (userData, callback) {
            $http({
                url: adminurl + 'Order/shippedProductEmail',
                method: 'POST',
                data: userData,
                withCredentials: false
            }).then(callback);
        },
        deliveredProductEmail: function (userData, callback) {
            $http({
                url: adminurl + 'Order/deliveredProductEmail',
                method: 'POST',
                data: userData,
                withCredentials: false
            }).then(callback);
        },
        genarateAndMailInvoice: function (userData, callback) {
            $http({
                url: adminurl + 'Order/generateInvoice',
                method: 'POST',
                data: userData,
                withCredentials: false
            }).then(callback);
        },
    };
});