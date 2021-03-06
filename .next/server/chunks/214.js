exports.id = 214;
exports.ids = [214];
exports.modules = {

/***/ 615:
/***/ ((module) => {

// Exports
module.exports = {
	"menu-container": "Navbar_menu-container__KH9On"
};


/***/ }),

/***/ 184:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "MainLayout_container__cktd1",
	"main": "MainLayout_main__Ft2WD"
};


/***/ }),

/***/ 214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/layouts/MainLayout.module.css
var MainLayout_module = __webpack_require__(184);
var MainLayout_module_default = /*#__PURE__*/__webpack_require__.n(MainLayout_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./components/ActiveLink.tsx



const style = {
    color: '#0070f3',
    textDecoration: 'underline'
};
const ActiveLink = ({ text , href  })=>{
    const { asPath  } = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: href,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            style: asPath === href ? style : undefined,
            children: text
        })
    });
};

// EXTERNAL MODULE: ./components/Navbar.module.css
var Navbar_module = __webpack_require__(615);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./components/Navbar.tsx



const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    }, 
];
const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: (Navbar_module_default())["menu-container"],
        children: menuItems.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(ActiveLink, {
                href: item.href,
                text: item.text
            }, item.href)
        )
    });
};

;// CONCATENATED MODULE: ./components/layouts/MainLayout.tsx




const MainLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (MainLayout_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Home page"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: (MainLayout_module_default()).main,
                children: children
            })
        ]
    });
};


/***/ })

};
;