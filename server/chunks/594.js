exports.id = 594;
exports.ids = [594];
exports.modules = {

/***/ 9009:
/***/ (() => {



/***/ }),

/***/ 32089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const FoodItem = ({ recipe })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: "/dish/" + recipe.id,
        className: "DecorLink",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "PopularItem",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    unoptimized: true,
                    loader: ()=>recipe.img,
                    className: "PopularItemImg",
                    src: recipe.img,
                    alt: recipe.title,
                    width: 200,
                    height: 200
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "FoodText",
                    children: recipe.title
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FoodItem);


/***/ }),

/***/ 83848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AboutLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(80000);
// EXTERNAL MODULE: ./src/app/all/css/index.css
var css = __webpack_require__(37193);
// EXTERNAL MODULE: ./src/app/all/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(64172);
// EXTERNAL MODULE: ./node_modules/react-icons/lia/index.esm.js
var index_esm = __webpack_require__(72333);
;// CONCATENATED MODULE: ./src/app/all/components/cuisines/Italian.tsx



function Italian() {
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "/all/Italian",
        className: "CategoryItem",
        children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* LiaPizzaSliceSolid */.d7s, {})
    });
}
/* harmony default export */ const cuisines_Italian = (Italian);

// EXTERNAL MODULE: ./node_modules/react-icons/pi/index.esm.js
var pi_index_esm = __webpack_require__(25018);
;// CONCATENATED MODULE: ./src/app/all/components/cuisines/American.tsx



function American() {
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "/all/American",
        className: "CategoryItem",
        children: /*#__PURE__*/ jsx_runtime_.jsx(pi_index_esm/* PiHamburger */.lGc, {})
    });
}
/* harmony default export */ const cuisines_American = (American);

// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var bi_index_esm = __webpack_require__(91086);
;// CONCATENATED MODULE: ./src/app/all/components/cuisines/Japanese.tsx



function Japanese() {
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "/all/Japanese",
        className: "CategoryItem",
        children: /*#__PURE__*/ jsx_runtime_.jsx(bi_index_esm/* BiSushi */.C1Y, {})
    });
}
/* harmony default export */ const cuisines_Japanese = (Japanese);

// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(68921);
;// CONCATENATED MODULE: ./src/app/all/components/cuisines/FilterOff.tsx



function FilterOff() {
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "/all",
        className: "CategoryItem",
        children: /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdFilterListOff */.xBS, {})
    });
}
/* harmony default export */ const cuisines_FilterOff = (FilterOff);

// EXTERNAL MODULE: ./node_modules/react-icons/gi/index.esm.js
var gi_index_esm = __webpack_require__(8529);
;// CONCATENATED MODULE: ./src/app/all/components/cuisines/German.tsx



function German() {
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "/all/German",
        className: "CategoryItem",
        children: /*#__PURE__*/ jsx_runtime_.jsx(gi_index_esm/* GiSausage */.xC6, {})
    });
}
/* harmony default export */ const cuisines_German = (German);

;// CONCATENATED MODULE: ./src/app/all/components/cuisines/Russian.tsx



function Russian() {
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: "/all/Russian",
        className: "CategoryItem",
        children: /*#__PURE__*/ jsx_runtime_.jsx(gi_index_esm/* GiDumpling */.jHs, {})
    });
}
/* harmony default export */ const cuisines_Russian = (Russian);

;// CONCATENATED MODULE: ./src/app/all/components/Category.tsx










function Category() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: "CategoryList",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(cuisines_FilterOff, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(cuisines_Italian, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(cuisines_American, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(cuisines_Japanese, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(cuisines_Russian, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(cuisines_German, {})
        ]
    });
}
/* harmony default export */ const components_Category = (Category);

;// CONCATENATED MODULE: ./src/app/all/layout.tsx



const metadata = {
    title: "All Dishes",
    description: "Page with all dishes"
};
function AboutLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Category, {}),
            children
        ]
    });
}


/***/ }),

/***/ 64172:
/***/ (() => {



/***/ }),

/***/ 37193:
/***/ (() => {



/***/ })

};
;