exports.id = "component---src-pages-using-typescript-tsxhead";
exports.ids = ["component---src-pages-using-typescript-tsxhead"];
exports.modules = {

/***/ "./src/pages/using-typescript.tsx?export=head":
/*!****************************************************!*\
  !*** ./src/pages/using-typescript.tsx?export=head ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
// If you don't want to use TypeScript you can delete this file!




const UsingTypescript = ({
  data,
  location
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Gatsby supports ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "TypeScript by default")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "This means that you can create and write ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, ".ts/.tsx"), " files for your pages, components, and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "gatsby-*"), " configuration files (for example ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "gatsby-config.ts"), ")."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "For type checking you'll want to install ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "typescript"), " via npm and run ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "tsc --init"), " to create a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "tsconfig"), " file."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "You're currently on the page ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, location.pathname), " which was built on ", data.site.buildTime, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "To learn more, head over to our", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  href: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/"
}, "documentation about TypeScript"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/"
}, "Go back to the homepage"));
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "Using TypeScript"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsingTypescript);
const query = "2907560070";

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.scss */ "./src/components/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_3__);





const Header = ({
  siteTitle
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
  className: "header"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
  src: _images_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  className: "header__links"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
  to: "#get-started"
}, "Get Started")));
Header.propTypes = {
  siteTitle: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
Header.defaultProps = {
  siteTitle: ``
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3649515864.json */ "./public/page-data/sq/d/3649515864.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.scss */ "./src/components/layout.scss");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.scss */ "./src/components/footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_4__);

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */






const Layout = ({
  children
}) => {
  const data = _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "_cds-light-theme"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    siteTitle: `Title`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      margin: `0 auto`,
      maxWidth: `var(--size-content)`,
      padding: `var(--size-gutter)`
    }
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("footer", {
    className: "footer",
    style: {
      color: "#6a6a6a"
    }
  }, "\xA9 ", new Date().getFullYear(), " Compassion International", ` `))));
};
Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/63159454.json */ "./public/page-data/sq/d/63159454.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */



function Seo({
  description,
  title,
  children
}) {
  var _site$siteMetadata, _site$siteMetadata2;
  const {
    site
  } = _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, defaultTitle ? `${title} | ${defaultTitle}` : title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:creator",
    content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : _site$siteMetadata2.author) || ``
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:description",
    content: metaDescription
  }), children);
}
Seo.defaultProps = {
  description: ``
};
Seo.propTypes = {
  description: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/components/footer.scss":
/*!************************************!*\
  !*** ./src/components/footer.scss ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/header.scss":
/*!************************************!*\
  !*** ./src/components/header.scss ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/layout.scss":
/*!************************************!*\
  !*** ./src/components/layout.scss ***!
  \************************************/
/***/ (() => {



/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjM3IiB2aWV3Qm94PSIwIDAgMTAwIDM3IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTI4MF84NTcxMSkiPgo8cGF0aCBkPSJNMTMuNTkxNCAxOS43NTk3QzEyLjgzNTEgMTcuNzUzMyAxMC44NjM0IDE2LjQzNzMgOC4zNjM5NSAxNi40MzczQzQuNTM1NjggMTYuNDM3MyAyLjE1MTU3IDE5LjA1MSAyLjE1MTU3IDIyLjY3NzFDMi4xNTE1NyAyNi41ODQ4IDUuMTMxNzEgMjkuNDU2MiA4LjYxNjA0IDI5LjQ1NjJDMTAuNDI1NiAyOS40NTYyIDEyLjY0OTUgMjguODcyOCAxNC4yMDcgMjYuMjYwOUgxNC42NDI4QzE0LjI4NjggMjcuMzYxNyAxMy43OTQ5IDI4LjQxOTMgMTMuMTc3MSAyOS40MTIxQzExLjcwOTUgMjkuMjE3IDEwLjcwMTIgMjkuOTk1NiA3Ljk5NjU2IDI5Ljk5NTZDMy4zNDc1MyAyOS45OTM3IDAgMjcuMTAwMiAwIDIzLjEwNkMwIDE4LjkxODUgMy40MzkzOCAxNS44OTYxIDguMjI3MTYgMTUuODk2MUMxMS4xMTU1IDE1Ljg5NjEgMTIuMzUyNSAxNi43NjEyIDEzLjA2MzggMTYuNzYxMkMxMy4zMTU5IDE2Ljc2MTIgMTMuNDMxMiAxNi42OTUgMTMuNDc2MSAxNi42MzA1SDEzLjgyMDFMMTQuMDI1MiAxOS43NTk3SDEzLjU5MTRaTTIwLjY5MSAyOS4zODgxQzIyLjA0MzMgMjkuMzg4MSAyMy41NzkzIDI4LjA5NDIgMjMuNTc5MyAyNS45MzUxQzIzLjU3OTMgMjMuNDc0MSAyMS45NzY5IDIxLjM3OTQgMjAuMDUgMjEuMzc5NEMxOC41Mzc1IDIxLjM3OTQgMTcuMTM4MyAyMi44NDgzIDE3LjEzODMgMjQuNzAzN0MxNy4xMzgzIDI3LjMxNzQgMTguNzIxMiAyOS4zODgxIDIwLjY5MSAyOS4zODgxWk0yMC4zNzA1IDIwLjg2MjJDMjMuMTY3IDIwLjg2MjIgMjUuMjk5IDIyLjgyNjIgMjUuMjk5IDI1LjM5NThDMjUuMjk5IDI3Ljk0MTQgMjMuMTY4OSAyOS45MDU0IDIwLjQ0MDkgMjkuOTA1NEMxNy41OTc1IDI5LjkwNTQgMTUuNDIwNSAyNy45NjM1IDE1LjQyMDUgMjUuNDM4MUMxNS40MjA1IDIyLjQ1OTkgMTcuOTg4NCAyMC44NjIyIDIwLjM3MDUgMjAuODYyMlpNMjguNDc4NSAyNy44OTlDMjguNDc4NSAyOS4wMjE5IDI4LjgwMDkgMjkuMjM3MiAzMC4wODQ4IDI5LjIzNzJWMjkuNjQ3N0gyNS4zMTY2VjI5LjIzNzJDMjYuNjQ1NCAyOS4yMzcyIDI2Ljk0NDQgMjguNjc1OCAyNi45NDQ0IDI3LjU3NTFWMjMuMzQzNEMyNi45NDQ0IDIyLjUwMjIgMjYuODA3NiAyMi4zMDcxIDI2LjI4IDIyLjI0MjdMMjUuMzg1IDIyLjEzNTlWMjEuNzY3OEwyOC4xMzY1IDIwLjg2MjJIMjguNDc4NVYyMi41ODg4QzMwLjEyOTggMjEuNDg4IDMxLjY0MjMgMjAuODYyMiAzMi41NTg4IDIwLjg2MjJDMzMuNjgyNSAyMC44NjIyIDM0LjUwNzIgMjEuNTMwNCAzNC43MzU4IDIyLjU4ODhDMzYuMjcxOCAyMS42ODEzIDM3LjY2OSAyMC44NjIyIDM4Ljc5MjcgMjAuODYyMkM0MC40NDIgMjAuODYyMiA0MS4wODUgMjIuMDQ5NCA0MS4wODUgMjQuMTIwMkM0MS4wODUgMjUuNTAyNSA0MS4wODUgMjYuOTQ5MyA0MS4wMTY2IDI4LjI2NTNDNDEuMDE2NiAyOC43MiA0MS4yOTAyIDI5LjIzNzIgNDIuMjMwMSAyOS4yMzcySDQyLjk2M1YyOS42NDc3SDM3LjgwNzhWMjkuMjM3MkgzOC4wMTNDMzguNjc3NCAyOS4yMzcyIDM4Ljk3NjQgMjkuMTMwNSAzOS4xODE2IDI4LjkzNTNDMzkuNTI1NSAyOC42MTE0IDM5LjU0OSAyNy4zNTk3IDM5LjU0OSAyNS44NzA2VjI0LjE4NjRDMzkuNTQ5IDIyLjUyNDMgMzguOTUyOSAyMS43MjU1IDM3LjgyOTMgMjEuNzI1NUMzNy4xMTk5IDIxLjcyNTUgMzYuMjAzNCAyMi4wNDk0IDM0Ljc4MDcgMjIuOTMzVjI3Ljg5OUMzNC43ODA3IDI4Ljk3NzcgMzUuMDU2MyAyOS4yMzcyIDM2LjIwMzQgMjkuMjM3MlYyOS42NDc3SDMxLjUwNTVWMjkuMjM3MkMzMi43ODc1IDI5LjIzNzIgMzMuMjQ0NyAyOC44MDY1IDMzLjI0NDcgMjcuNTc1MVYyMy41ODA5QzMzLjI0NDcgMjIuMjIyNSAzMi4zNTE3IDIxLjcyNTUgMzEuNTUwNSAyMS43MjU1QzMwLjkwOTUgMjEuNzI1NSAzMC4wMzc5IDIyLjAwNTMgMjguNDc4NSAyMi45NzcxVjI3Ljg5OVoiIGZpbGw9IiMwMDVFQjgiLz4KPHBhdGggZD0iTTQ0Ljk5MTQgMjcuOTYzNUM0NS44MTggMjguNjU1NiA0Ni44NDc5IDI5LjEzMDQgNDcuNjk2IDI5LjEzMDRDNDkuMjU1NSAyOS4xMzA0IDUwLjQwMDYgMjcuNjgzNyA1MC40MDA2IDI1LjkxM0M1MC40MDA2IDIzLjA2MzYgNDguNjEyNSAyMS45ODUgNDcuMzk5IDIxLjk4NUM0Ni42ODc2IDIxLjk4NSA0NS44MTYxIDIyLjM3MTYgNDQuOTkxNCAyMy4wNDE2VjI3Ljk2MzVaTTQ0Ljk5MTQgMzMuMjczOEM0NC45OTE0IDM0LjM1NDIgNDUuNTY1OSAzNC42NzgyIDQ2LjUyNzQgMzQuNjc4Mkg0Ny4xVjM1LjA4ODdINDEuNjkyN1YzNC42NzgySDQxLjkyMTRDNDMuMDkgMzQuNjc4MiA0My40NTc0IDM0LjMxMDEgNDMuNDU3NCAzMy4wODA1VjIzLjE1MDJDNDMuNDU3NCAyMi43Mzk3IDQzLjM2NTUgMjIuNTY2NyA0Mi44MTQ0IDIyLjQzNzhMNDIuMDgxNiAyMi4yNjQ4VjIxLjg1NDNMNDQuNTM0MSAyMC40Mjk3SDQ0Ljk5MTRWMjIuNTAyMkM0Ni40MTQxIDIxLjQ4OCA0Ny42Mjk2IDIwLjkyNjYgNDguNTQ0MSAyMC45MjY2QzUwLjMzMjIgMjAuOTI2NiA1MS45MzY2IDIyLjgyNjIgNTEuOTM2NiAyNC45NDExQzUxLjkzNjYgMjcuNTU0OCA0OS42ODkzIDI5Ljc5ODYgNDcuMDc4NSAyOS43OTg2QzQ2LjQ1OSAyOS43OTg2IDQ1Ljg2MyAyOS42Njk4IDQ0Ljk5MTQgMjkuMzY2MVYzMy4yNzM4Wk01Ny40NjExIDI1LjYzMTRDNTcuMDI2NSAyNS44NjI2IDU2LjU3NTMgMjYuMDY1IDU2LjExMDggMjYuMjM2OUM1NC43MTE2IDI2Ljc3NjIgNTQuMTgzOSAyNi45OTE2IDU0LjE4MzkgMjcuODc3QzU0LjE4MzkgMjguNjU1NiA1NC44NDg0IDI5LjE1MDcgNTUuNTM2MiAyOS4xNTA3QzU1LjkwMzYgMjkuMTUwNyA1Ni4xNzkyIDI5LjA0MzkgNTcuNDYxMSAyOC4yMDA5VjI1LjYzMTRaTTUyLjkyMzUgMjMuNjY3NEM1Mi44ODEyIDIzLjU3MTYgNTIuODU4IDIzLjQ2OTIgNTIuODU1MSAyMy4zNjU1QzUyLjg1NTEgMjIuNjEwOCA1NC43NTY1IDIwLjg2MjIgNTYuMjQ3NiAyMC44NjIyQzU2LjkzNTQgMjAuODYyMiA1OC4wMTIyIDIxLjE2NDEgNTguNjUzMiAyMi4wMDUzQzU4Ljk5NzEgMjIuNDU5OSA1OC45OTcxIDIyLjczOTcgNTguOTk3MSAyMy44NjI1VjI2Ljc1NkM1OC45OTcxIDI4LjQ4MjUgNTguOTk3MSAyOC44NzA5IDU5LjU5MzEgMjguODcwOUM1OS44NDcyIDI4Ljg3MDkgNjAuMTQ0MiAyOC44NDg4IDYwLjcxNjggMjguMzk2TDYwLjgzMDEgMjguNzJDNTkuNTkzMSAyOS42Njk4IDU4Ljk1MjIgMjkuOTA3MiA1OC41NjMzIDI5LjkwNzJDNTcuNjIxNCAyOS45MDcyIDU3LjUzMTUgMjguOTM1MyA1Ny41MDggMjguNTg5M0M1NS45MjUxIDI5LjgyMDcgNTUuNDY3OCAyOS45MDcyIDU0Ljg1MDMgMjkuOTA3MkM1My41MjE1IDI5LjkwNzIgNTIuNzE4MyAyOS4xOTQ5IDUyLjcxODMgMjguMTM2NUM1Mi43MTgzIDI2LjgyMDQgNTMuOTU1MyAyNi4zNjU4IDU1LjQyMjkgMjYuMDE5N0M1NS45MDM2IDI1LjkxMyA1Ni42NTk5IDI1LjY1MzQgNTcuNDYxMSAyNS4yMDA2VjIzLjQ5NDRDNTcuNDYxMSAyMi44OTA2IDU3LjQ2MTEgMjIuNTQ0NiA1Ny4wNzAzIDIyLjExMzlDNTYuNzc1MiAyMS43Njc4IDU2LjI5MjUgMjEuNDg4IDU1Ljc4ODMgMjEuNDg4QzU1LjAzMjEgMjEuNDg4IDU0LjM2NzYgMjIuMDkxOCA1NC4zNjc2IDIyLjU0NDZDNTQuMzY3NiAyMi42NzM0IDU0LjM5MTEgMjIuNzYxOCA1NC40ODI5IDIyLjk1NUw1Mi45MjM1IDIzLjY2NzRaTTYxLjgxOSAyNy40NjY1QzYyLjA5MjUgMjguNzYyMyA2Mi45NjYxIDI5LjQ5NjcgNjMuOTk1OSAyOS40OTY3QzY0LjkxNDQgMjkuNDk2NyA2NS42MjM4IDI4Ljg0ODggNjUuNjIzOCAyOC4wNzIxQzY1LjYyMzggMjcuNjE3NCA2NS41MDg1IDI3LjMzNzYgNjQuODkxIDI2Ljc1NkM2My4yNjMxIDI1LjIyMjcgNjEuNDUxNiAyNS4wNzE4IDYxLjQ1MTYgMjMuMjc5QzYxLjQ1MTYgMjEuODU0MyA2Mi42NDM2IDIwLjg2MjIgNjQuMzg2OCAyMC44NjIyQzY1LjAwNDMgMjAuODYyMiA2NS42NDcyIDIwLjk5MTEgNjYuMjE5OCAyMS4yMDY0TDY2LjI2NDggMjMuMTcyMkg2NS44NzU5QzY1LjcxNTYgMjIuMDY5NyA2NC45NTc0IDIxLjM3OTQgNjQuMDQyOCAyMS4zNzk0QzYzLjI4NjYgMjEuMzc5NCA2Mi42NDM2IDIxLjg3NjQgNjIuNjQzNiAyMi41ODg4QzYyLjY0MzYgMjQuNDg4MyA2Ni45MDc3IDI0LjgxMjMgNjYuOTA3NyAyNy40NDYyQzY2LjkwNzcgMjguODQ4OCA2NS42Njg3IDI5LjkwNzIgNjQuMDY2MyAyOS45MDcyQzYzLjcyMjcgMjkuOTEzOCA2My4zODA1IDI5Ljg2MjcgNjMuMDU2IDI5Ljc1NjNDNjIuODA1OCAyOS42OSA2Mi42MjIxIDI5LjYyNzQgNjIuNDM4NCAyOS42Mjc0QzYyLjMwMTcgMjkuNjI3NCA2Mi4xNjQ5IDI5LjcxMjEgNjIuMDQ3NiAyOS44ODUxSDYxLjcwMzdMNjEuNDUzNSAyNy40NjY1SDYxLjgxOVpNNjguMjk5MSAyNy40NjY1QzY4LjU3MjcgMjguNzYyMyA2OS40NDYyIDI5LjQ5NjcgNzAuNDc2IDI5LjQ5NjdDNzEuMzk0NSAyOS40OTY3IDcyLjEwMzkgMjguODQ4OCA3Mi4xMDM5IDI4LjA3MjFDNzIuMTAzOSAyNy42MTc0IDcxLjk4ODYgMjcuMzM3NiA3MS4zNzExIDI2Ljc1NkM2OS43NDMyIDI1LjIyMjcgNjcuOTMxNyAyNS4wNzE4IDY3LjkzMTcgMjMuMjc5QzY3LjkzMTcgMjEuODU0MyA2OS4xMjM3IDIwLjg2MjIgNzAuODY2OSAyMC44NjIyQzcxLjQ4NDQgMjAuODYyMiA3Mi4xMjczIDIwLjk5MTEgNzIuNjk5OSAyMS4yMDY0TDcyLjc0NDkgMjMuMTcyMkg3Mi4zNTRDNzIuMTk1NyAyMi4wNjk3IDcxLjQzOTUgMjEuMzc5NCA3MC41MjI5IDIxLjM3OTRDNjkuNzY2NyAyMS4zNzk0IDY5LjEyMzcgMjEuODc2NCA2OS4xMjM3IDIyLjU4ODhDNjkuMTIzNyAyNC40ODgzIDczLjM4NzggMjQuODEyMyA3My4zODc4IDI3LjQ0NjJDNzMuMzg3OCAyOC44NDg4IDcyLjE0ODggMjkuOTA3MiA3MC41NDQ0IDI5LjkwNzJDNzAuMjAxNSAyOS45MTM2IDY5Ljg2IDI5Ljg2MjUgNjkuNTM2MSAyOS43NTYzQzY5LjI4NCAyOS42OSA2OS4xMDIyIDI5LjYyNzQgNjguOTE4NSAyOS42Mjc0QzY4Ljc4MTggMjkuNjI3NCA2OC42NDMgMjkuNzEyMSA2OC41Mjc3IDI5Ljg4NTFINjguMTg1N0w2Ny45MzE3IDI3LjQ2NjVINjguMjk5MVpNNzcuNTI4NyAyOC4wMDU4Qzc3LjUyODcgMjguNzYyMyA3Ny45NjQ1IDI5LjIzOSA3OS4xOCAyOS4yMzlWMjkuNjQ3N0g3NC4wOTEzVjI5LjIzNzJDNzUuNDkwNSAyOS4yMzcyIDc1Ljk5NDcgMjguODA2NSA3NS45OTQ3IDI3LjY2MTZWMjMuMzIzMkM3NS45OTQ3IDIyLjQ4MDIgNzUuODc3NCAyMi4zNzM0IDc1LjI4MzQgMjIuMjY0OEw3NC4yMDY2IDIyLjA2OTdWMjEuNzI1NUw3Ny4xODQ4IDIwLjc1MzZINzcuNTI4N1YyOC4wMDU4Wk04NC4zMTU2IDI5LjM4ODFDODUuNjY3OSAyOS4zODgxIDg3LjIwMzkgMjguMDk0MiA4Ny4yMDM5IDI1LjkzNTFDODcuMjAzOSAyMy40NzQxIDg1LjU5OTUgMjEuMzc5NCA4My42NzQ3IDIxLjM3OTRDODIuMTYyMSAyMS4zNzk0IDgwLjc2MjkgMjIuODQ4MyA4MC43NjI5IDI0LjcwMzdDODAuNzYyOSAyNy4zMTc0IDgyLjM0NTggMjkuMzg4MSA4NC4zMTU2IDI5LjM4ODFaTTgzLjk5NTIgMjAuODYyMkM4Ni43ODk2IDIwLjg2MjIgODguOTIxNyAyMi44MjYyIDg4LjkyMTcgMjUuMzk1OEM4OC45MjE3IDI3Ljk0MTQgODYuNzkxNiAyOS45MDU0IDg0LjA2MzYgMjkuOTA1NEM4MS4yMjIyIDI5LjkwNTQgNzkuMDQ1MiAyNy45NjM1IDc5LjA0NTIgMjUuNDM4MUM3OS4wNDUyIDIyLjQ1OTkgODEuNjExIDIwLjg2MjIgODMuOTk1MiAyMC44NjIyWk05Mi4wMDM0IDI3Ljc3MDJDOTIuMDAzNCAyOC45NTc0IDkyLjI5ODUgMjkuMjM3MiA5My41Mzc1IDI5LjIzNzJWMjkuNjQ3N0g4OC45MzE0VjI5LjIzNzJDODkuOTM5OCAyOS4yMzcyIDkwLjQ2NTUgMjguNzIgOTAuNDY1NSAyNy44NzdWMjMuMzQzNEM5MC40NjU1IDIyLjU0NDYgOTAuMzc1NiAyMi4zOTM2IDg5Ljc3OTYgMjIuMjg2OUw4OC45OTc5IDIyLjEzNTlWMjEuNzg5OUw5MS42MzYxIDIwLjg4MjVIOTIuMDAxNVYyMi41NjY3QzkzLjUzNzUgMjEuNjYxMSA5NC44MjE0IDIwLjg2MjIgOTUuOTQzMSAyMC44NjIyQzk3LjUwMjUgMjAuODYyMiA5OC4zOTU2IDIxLjk0MDggOTguMzk1NiAyNC4wOTk5Qzk4LjM5NTYgMjYuOTcxNCA5OC4yMzU0IDI3LjUzMjggOTguMjExOSAyOC4zNzM5Qzk4LjE5MDQgMjguOTU3NCA5OC41NTU5IDI5LjIzOSA5OS40OTU4IDI5LjIzOUgxMDBWMjkuNjQ3N0g5NS4wNzM1VjI5LjIzNzJDOTUuNzM3OSAyOS4yMTUxIDk2LjEyODcgMjkuMDY0MiA5Ni4zNzg5IDI4LjgyNjdDOTYuODE0NyAyOC40MTYzIDk2Ljg1OTYgMjYuODQwNyA5Ni44NTk2IDIzLjk3MTFDOTYuODU5NiAyMi4yNDI3IDk1Ljk2NjUgMjEuNzAzNCA5NS4wNSAyMS43MDM0Qzk0LjMxNzIgMjEuNzAzNCA5My4xOTM1IDIyLjMwNzEgOTIuMDAxNSAyMy4wODM5VjI3Ljc3MDIiIGZpbGw9IiMwMDVFQjgiLz4KPHBhdGggZD0iTTE5LjM3NTggNS42MDQ5NUMyMC44ODY0IDUuNjcxMjEgMjIuMTYwNSA0LjY4NDYyIDIyLjIyNSAzLjQwNTM2QzIyLjI4OTUgMi4xMjQyNiAyMS4xMTcgMS4wMzA5MSAxOS42MDY0IDAuOTY2NDkxQzE4LjA5NTggMC44OTgzODcgMTYuODE5NyAxLjg4MzE0IDE2Ljc1NzEgMy4xNjQyNEMxNi42OTI3IDQuNDQ1MzMgMTcuODY1MiA1LjUzODY5IDE5LjM3NTggNS42MDQ5NVoiIGZpbGw9IiMwMDVFQjgiLz4KPHBhdGggZD0iTTI2Ljc0NSAwLjk4NDg5OEMyNi43NDUgMC45ODQ4OTggMjUuMzI2MyAzLjM1MDE0IDIyLjE2NjQgNS4wNDE3MUMxOS4wMDQ1IDYuNzMxNDMgMTYuMTk2MyA3LjcxNDM0IDEzLjUwOTMgMTEuNjMxM0MxMy41MDkzIDExLjYzMTMgMTQuMzA4NSAxMS4yODUyIDEzLjc1NTUgMTIuMTI0NkMxMy43NTU1IDEyLjEyNDYgMTQuMTY5OCAxMS43NTY0IDE0LjUyMzUgMTEuNjQ2QzE0LjUyMzUgMTEuNjQ2IDE0LjczODUgMTEuNjAzNyAxNC42NDY2IDExLjg0ODVDMTQuNjQ2NiAxMS44NDg1IDE2LjA2MzQgMTAuODE0IDE1LjcwNTggMTEuMzE0N0MxNS40ODg5IDExLjYxNDcgMTYuODI5NSAxMC4zNTk0IDE2Ljk4OTcgMTAuNDgyN0MxNi45ODk3IDEwLjQ4MjcgMTcuMDM2NiAxMC41NTgyIDE2LjgzMzQgMTAuODQ1M0MxNi44MzM0IDEwLjg0NTMgMjAuMDM0MyA5LjAzMjI1IDIxLjIzMDMgOC41NTM2OEMyNi40MDg5IDYuNDc3NDIgMjcuNTIyOCAzLjA0NjQzIDI3LjA0NiAxLjExMDA2QzI3LjA0NiAxLjExMDA2IDI3LjAyNjQgMC43MjE2ODQgMjYuNzQ1IDAuOTg2NzM4IiBmaWxsPSIjMDA1RUI4Ii8+CjxwYXRoIGQ9Ik0xNS45NDEzIDE3LjY5ODFDMTUuOTQxMyAxNy42OTgxIDE2LjE2NDEgMTIuNjEwNSAxOS41MjUzIDEwLjAwOTZDMjIuODg2NSA3LjQwNjk1IDI2LjA5MTQgNy44ODU1MiAyNy40MjggNy43OTcxN0MyNy40MjggNy43OTcxNyAzMC4xNiA3Ljg3MDggMzEuNTI2IDcuNDM2NEMzMS41MjYgNy40MzY0IDMxLjcyNTMgOS43MDU5NCAyNS4wMTg1IDEwLjc5MDFDMjUuMDE4NSAxMC43OTAxIDIyLjgxMDMgMTAuNzYwNiAyMC45MjI1IDEzLjEzMTRDMjAuOTIyNSAxMy4xMzE0IDE5LjA0ODQgMTUuMTExOSAxNy4zMTUxIDE5LjIwMTlDMTcuMzE1MSAxOS4yMDE5IDE3LjI5OTQgMTguNjA5MiAxNy4wNTUyIDE5LjAyODlMMTYuNDEwMyAyMC40MDJMMTYuMzg2OCAxOS4xMDhDMTYuMzg2OCAxOS4xMDggMTYuMjcxNSAxOC43ODIyIDE2LjExOTEgMTkuMjMxM0MxNi4xMTkxIDE5LjIzMTMgMTUuOTk2IDE5LjM4MjMgMTYuMjAzMSAxNy42NjMxQzE2LjIwMzEgMTcuNjYzMSAxNi4xNDg0IDE3LjI5NSAxNS45NDEzIDE3LjY5OTlWMTcuNjk4MVoiIGZpbGw9IiMwMDVFQjgiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05OC42MTY1IDE3Ljk4NTJIOTcuOTc3NVYxOS41Mzg3SDk4LjIzMzVWMTguODcwNkg5OC41MDcxTDk4Ljk1NjYgMTkuNTM4N0g5OS4yMzAyTDk4Ljc1OTIgMTguODUyMkM5OS4wMDU0IDE4LjgyODIgOTkuMTkzIDE4LjcxMDQgOTkuMTkzIDE4LjQyODhDOTkuMTkzIDE4LjEzMjUgOTkuMDA3NCAxNy45ODUyIDk4LjYxNjUgMTcuOTg1MlpNOTguNTAzMiAxOC42NzM2SDk4LjIzMzVWMTguMTgwM0g5OC41NzM2Qzk4Ljc0NzUgMTguMTgwMyA5OC45MzcgMTguMjExNiA5OC45MzcgMTguNDE5NkM5OC45MzcgMTguNjY0NCA5OC43Mjc5IDE4LjY3MzYgOTguNTAzMiAxOC42NzM2WiIgZmlsbD0iIzAwNUVCOCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTk5LjA2OTkgMTcuNTMwNkM5OC44OTgxIDE3LjQ2NDcgOTguNzE0MSAxNy40MzE2IDk4LjUyODYgMTcuNDMzQzk4LjE1MzkgMTcuNDMzIDk3Ljc5NDUgMTcuNTczMiA5Ny41Mjk1IDE3LjgyMjhDOTcuMjY0NiAxOC4wNzI0IDk3LjExNTcgMTguNDEwOSA5Ny4xMTU3IDE4Ljc2MzhDOTcuMTE1NyAxOS4xMTY4IDk3LjI2NDYgMTkuNDU1MyA5Ny41Mjk1IDE5LjcwNDhDOTcuNzk0NSAxOS45NTQ0IDk4LjE1MzkgMjAuMDk0NiA5OC41Mjg2IDIwLjA5NDZDOTguNzE1NCAyMC4wOTU4IDk4LjkwMDUgMjAuMDYyIDk5LjA3MzIgMTkuOTk1MkM5OS4yNDYgMTkuOTI4MyA5OS40MDI5IDE5LjgyOTggOTkuNTM0NyAxOS43MDUyQzk5LjY2NjYgMTkuNTgwNiA5OS43NzA4IDE5LjQzMjYgOTkuODQxMyAxOS4yNjk3Qzk5LjkxMTggMTkuMTA2OCA5OS45NDcyIDE4LjkzMjQgOTkuOTQ1NCAxOC43NTY1Qzk5Ljk0NTQgMTguNTgxNyA5OS45MDg3IDE4LjQwODcgOTkuODM3MyAxOC4yNDc0Qzk5Ljc2NiAxOC4wODYyIDk5LjY2MTQgMTcuOTM5OCA5OS41Mjk3IDE3LjgxNjdDOTkuMzk4IDE3LjY5MzcgOTkuMjQxNyAxNy41OTY0IDk5LjA2OTkgMTcuNTMwNlpNOTkuNjg3NCAxOC43NTY1Qzk5LjY4NzQgMTkuNDA4MSA5OS4xODEzIDE5Ljg5OTUgOTguNTI4NiAxOS44OTk1VjE5Ljg5NzdDOTcuODY4MSAxOS44OTc3IDk3LjM2MiAxOS40MDgxIDk3LjM2MiAxOC43NTY1Qzk3LjM2MiAxOC40NjYgOTcuNDg0NSAxOC4xODc0IDk3LjcwMjUgMTcuOTgyQzk3LjkyMDYgMTcuNzc2NyA5OC4yMTYzIDE3LjY2MTMgOTguNTI0NyAxNy42NjEzQzk4LjgzMzEgMTcuNjYxMyA5OS4xMjg4IDE3Ljc3NjcgOTkuMzQ2OSAxNy45ODJDOTkuNTY0OSAxOC4xODc0IDk5LjY4NzQgMTguNDY2IDk5LjY4NzQgMTguNzU2NVoiIGZpbGw9IiMwMDVFQjgiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMjgwXzg1NzExIj4KPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIzNS43MTQzIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwLjg5MjgyMikiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K");

/***/ }),

/***/ "./public/page-data/sq/d/3649515864.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3649515864.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter"}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-using-typescript-tsxhead.js.map