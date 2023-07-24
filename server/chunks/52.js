exports.id = 52;
exports.ids = [52];
exports.modules = {

/***/ 91925:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 71415))

/***/ }),

/***/ 87073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $o: () => (/* binding */ confirmationFormType),
/* harmony export */   Ef: () => (/* binding */ MAX_PASSWORD_LENGTH),
/* harmony export */   Ep: () => (/* binding */ changePasswordFormType),
/* harmony export */   HT: () => (/* binding */ nullFunction),
/* harmony export */   Il: () => (/* binding */ emptyDishesArray),
/* harmony export */   Z3: () => (/* binding */ differentPasswordsFormType),
/* harmony export */   bK: () => (/* binding */ nullAdminInfo),
/* harmony export */   gZ: () => (/* binding */ userInfoKey),
/* harmony export */   i4: () => (/* binding */ timeForReloading),
/* harmony export */   jq: () => (/* binding */ logOutConfirmFormType),
/* harmony export */   lo: () => (/* binding */ MIN_PASSWORD_LENGTH),
/* harmony export */   m6: () => (/* binding */ addDishFormType),
/* harmony export */   rc: () => (/* binding */ nullDish),
/* harmony export */   sO: () => (/* binding */ deleteAccountFormType),
/* harmony export */   uN: () => (/* binding */ authWasNotDoneFormType),
/* harmony export */   vw: () => (/* binding */ authFailedFormType),
/* harmony export */   x3: () => (/* binding */ addToMenuFormType),
/* harmony export */   zW: () => (/* binding */ nullClient),
/* harmony export */   zk: () => (/* binding */ authCompletedFormType)
/* harmony export */ });
/* unused harmony exports emptyClientsArray, MIN_NAME_LENGTH, MAX_NAME_LENGTH, additionalBasePath */
// json-server -p 3001 --watch db.json
// export const fetchURL: string = "http://localhost:3001";
// export const additionalURLPath: string = "/clients";
const nullAdminInfo = {
    restaurant: "",
    cuisine: ""
};
const nullDish = {
    id: 0,
    title: "dish",
    price: 0,
    calories: 0,
    vegetarian: false,
    cuisine: "",
    img: "",
    link: ""
};
const emptyDishesArray = [];
const emptyClientsArray = (/* unused pure expression or super */ null && ([]));
const nullClient = {
    id: 0,
    token: "",
    email: "",
    admin: false,
    admin_info: nullAdminInfo,
    dishes: emptyDishesArray
};
const addDishFormType = "add_dish";
const confirmationFormType = "confirm";
const addToMenuFormType = "add_to_menu";
const authFailedFormType = "auth_fail";
const authWasNotDoneFormType = "auth_not_done";
const differentPasswordsFormType = "different_passwords";
const authCompletedFormType = "auth_completed";
const logOutConfirmFormType = "log_out";
const deleteAccountFormType = "delete_acc";
const changePasswordFormType = "change_password";
const nullFunction = ()=>{};
const userInfoKey = "userInfo";
const timeForReloading = 1000;
const MIN_NAME_LENGTH = 4;
const MAX_NAME_LENGTH = 15;
const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_LENGTH = 20;
const additionalBasePath = "";


/***/ }),

/***/ 71415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_NavigationButtons)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/lib/wrapper/css/position.css
var position = __webpack_require__(46244);
// EXTERNAL MODULE: ./src/lib/wrapper/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(29895);
;// CONCATENATED MODULE: ./src/lib/wrapper/images/cart.svg
/* harmony default export */ const cart = ({"src":"/_next/static/media/cart.184de2df.svg","height":25,"width":25,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/lib/wrapper/images/person-check.svg
/* harmony default export */ const person_check = ({"src":"/_next/static/media/person-check.6542027f.svg","height":25,"width":25,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var index_esm = __webpack_require__(85228);
// EXTERNAL MODULE: ./src/app/classes.ts
var classes = __webpack_require__(87073);
;// CONCATENATED MODULE: ./src/lib/wrapper/header/components/NavigationButtons.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const NavigationButtons = ({})=>{
    const [link, setLink] = (0,react_.useState)("/auth");
    const [myMenu, setMyMenu] = (0,react_.useState)("/auth");
    (0,react_.useEffect)(()=>{
        const check = localStorage.getItem(classes/* userInfoKey */.gZ);
        if (check) {
            const userInfo = JSON.parse(localStorage.getItem(classes/* userInfoKey */.gZ));
            setLink(`/auth/${userInfo.admin ? "admin" : "user"}/${userInfo.token}`);
            setMyMenu(`${userInfo.admin ? `/auth/admin/${userInfo.token}` : "/my"}`);
        } else {
            setLink("/auth");
            setMyMenu("/auth");
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "NavWrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "NavItem",
                        href: myMenu,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: cart,
                            alt: "cart"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "NavItem",
                        href: link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: person_check,
                            alt: "person"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ChevronWrapper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "ChevronItem",
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BiHomeAlt2 */.In4, {
                        size: 25
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_NavigationButtons = (NavigationButtons);


/***/ }),

/***/ 82326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Montserrat","arguments":[{"subsets":["latin"],"weight":["400","600","700"]}],"variableName":"montserrat"}
var layout_tsx_import_Montserrat_arguments_subsets_latin_weight_400_600_700_variableName_montserrat_ = __webpack_require__(38724);
var layout_tsx_import_Montserrat_arguments_subsets_latin_weight_400_600_700_variableName_montserrat_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Montserrat_arguments_subsets_latin_weight_400_600_700_variableName_montserrat_);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(80000);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(75553);
// EXTERNAL MODULE: ./src/app/bootstrap.min.css
var bootstrap_min = __webpack_require__(43381);
// EXTERNAL MODULE: ./src/lib/wrapper/css/position.css
var position = __webpack_require__(21177);
// EXTERNAL MODULE: ./src/lib/wrapper/css/bootstrap.min.css
var css_bootstrap_min = __webpack_require__(89745);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src/lib/wrapper/header/components/Logo.tsx","import":"Kaushan_Script","arguments":[{"subsets":["latin"],"weight":["400"]}],"variableName":"kaushanScript"}
var Logo_tsx_import_Kaushan_Script_arguments_subsets_latin_weight_400_variableName_kaushanScript_ = __webpack_require__(85727);
var Logo_tsx_import_Kaushan_Script_arguments_subsets_latin_weight_400_variableName_kaushanScript_default = /*#__PURE__*/__webpack_require__.n(Logo_tsx_import_Kaushan_Script_arguments_subsets_latin_weight_400_variableName_kaushanScript_);
;// CONCATENATED MODULE: ./src/lib/wrapper/header/components/Logo.tsx





function Logo() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Logo_tsx_import_Kaushan_Script_arguments_subsets_latin_weight_400_variableName_kaushanScript_default()).className,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "InnoLogo",
            children: "InnoFood"
        })
    });
}
/* harmony default export */ const components_Logo = (Logo);

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21913);
;// CONCATENATED MODULE: ./src/lib/wrapper/header/components/NavigationButtons.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/runner/work/fwd_react/fwd_react/src/lib/wrapper/header/components/NavigationButtons.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const NavigationButtons = (__default__);
;// CONCATENATED MODULE: ./src/lib/wrapper/header/Header.tsx







function Header() {
    // const [currentPage, setCurrentPage] = useState('/')
    // const [prevPage, setPrevPage] = useState('/')
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "GeneralFooterHeader PositionHeader",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(NavigationButtons, {})
        ]
    });
}
/* harmony default export */ const header_Header = (Header);

// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"src/lib/wrapper/footer/components/SomeText.tsx","import":"Dancing_Script","arguments":[{"subsets":["latin"],"weight":["400"]}],"variableName":"dancingScript"}
var SomeText_tsx_import_Dancing_Script_arguments_subsets_latin_weight_400_variableName_dancingScript_ = __webpack_require__(42414);
var SomeText_tsx_import_Dancing_Script_arguments_subsets_latin_weight_400_variableName_dancingScript_default = /*#__PURE__*/__webpack_require__.n(SomeText_tsx_import_Dancing_Script_arguments_subsets_latin_weight_400_variableName_dancingScript_);
;// CONCATENATED MODULE: ./src/lib/wrapper/footer/components/SomeText.tsx




function SomeText() {
    const footerText = "FooterText";
    const someText = "SomeText";
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${footerText} ${someText} ${(SomeText_tsx_import_Dancing_Script_arguments_subsets_latin_weight_400_variableName_dancingScript_default()).className}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "InnoFood"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("text", {
                    className: "Secret1",
                    children: "N"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("text", {
                    className: "Secret2",
                    children: "&"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("text", {
                    className: "Secret3",
                    children: "K"
                })
            ]
        })
    });
}
/* harmony default export */ const components_SomeText = (SomeText);

;// CONCATENATED MODULE: ./src/lib/wrapper/footer/components/AboutUsLink.tsx



function AboutUsLink() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "FooterText AboutUsLink",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            href: "/about",
            children: "About Us"
        })
    });
}
/* harmony default export */ const components_AboutUsLink = (AboutUsLink);

;// CONCATENATED MODULE: ./src/lib/wrapper/footer/Footer.tsx







function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "GeneralFooterHeader PositionFooter",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_SomeText, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_AboutUsLink, {})
        ]
    });
}
/* harmony default export */ const footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/app/layout.tsx







const metadata = {
    title: "InnoFood",
    description: "Home Page"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "UTF-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "ie=edge"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: (layout_tsx_import_Montserrat_arguments_subsets_latin_weight_400_600_700_variableName_montserrat_default()).className,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "inside",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(footer_Footer, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 82819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23785);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 43381:
/***/ (() => {



/***/ }),

/***/ 75553:
/***/ (() => {



/***/ }),

/***/ 29895:
/***/ (() => {



/***/ }),

/***/ 89745:
/***/ (() => {



/***/ }),

/***/ 46244:
/***/ (() => {



/***/ }),

/***/ 21177:
/***/ (() => {



/***/ })

};
;