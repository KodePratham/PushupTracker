"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/pushups";
exports.ids = ["pages/api/pushups"];
exports.modules = {

/***/ "@clerk/nextjs/server":
/*!***************************************!*\
  !*** external "@clerk/nextjs/server" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@clerk/nextjs/server");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n// PrismaClient is attached to the `global` object in development to prevent\n// exhausting your database connection limit.\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5Qyw0RUFBNEU7QUFDNUUsNkNBQTZDO0FBQzdDLE1BQU1DLGVBQWUsR0FBR0MsTUFBTTtBQUU5QixNQUFNQyxNQUFNLEdBQUdGLGVBQWUsQ0FBQ0UsTUFBTSxJQUFJLElBQUlILHdEQUFZLEVBQUU7QUFFM0QsSUFBSUksSUFBcUMsRUFBRUgsZUFBZSxDQUFDRSxNQUFNLEdBQUdBLE1BQU0sQ0FBQztBQUUzRSxpRUFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVzaHVwLXRyYWNrZXIvLi9saWIvcHJpc21hLmpzPzc1MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxuLy8gUHJpc21hQ2xpZW50IGlzIGF0dGFjaGVkIHRvIHRoZSBgZ2xvYmFsYCBvYmplY3QgaW4gZGV2ZWxvcG1lbnQgdG8gcHJldmVudFxyXG4vLyBleGhhdXN0aW5nIHlvdXIgZGF0YWJhc2UgY29ubmVjdGlvbiBsaW1pdC5cclxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsO1xyXG5cclxuY29uc3QgcHJpc21hID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.js\n");

/***/ }),

/***/ "(api)/./pages/api/pushups/index.js":
/*!************************************!*\
  !*** ./pages/api/pushups/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"@clerk/nextjs/server\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\n\nasync function handler(req, res) {\n    const { userId  } = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.getAuth)(req);\n    if (!userId) {\n        return res.status(401).json({\n            error: \"Unauthorized\"\n        });\n    }\n    // GET request to fetch logs\n    if (req.method === \"GET\") {\n        try {\n            const logs = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pushupLog.findMany({\n                where: {\n                    userId\n                },\n                orderBy: {\n                    date: \"desc\"\n                }\n            });\n            return res.status(200).json(logs);\n        } catch (error) {\n            console.error(\"Error fetching logs:\", error);\n            return res.status(500).json({\n                error: \"Failed to fetch logs\"\n            });\n        }\n    }\n    // POST request to create a new log\n    if (req.method === \"POST\") {\n        try {\n            const { count  } = req.body;\n            if (!count || isNaN(count) || count <= 0) {\n                return res.status(400).json({\n                    error: \"Valid count is required\"\n                });\n            }\n            const log = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pushupLog.create({\n                data: {\n                    count: parseInt(count),\n                    userId\n                }\n            });\n            return res.status(201).json(log);\n        } catch (error1) {\n            console.error(\"Error creating log:\", error1);\n            return res.status(500).json({\n                error: \"Failed to create log\"\n            });\n        }\n    }\n    // Method not allowed\n    return res.status(405).json({\n        error: \"Method not allowed\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHVzaHVwcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStDO0FBQ047QUFFMUIsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNLEVBQUVDLE1BQU0sR0FBRSxHQUFHTCw2REFBTyxDQUFDRyxHQUFHLENBQUM7SUFFL0IsSUFBSSxDQUFDRSxNQUFNLEVBQUU7UUFDWCxPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxjQUFjO1NBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCw0QkFBNEI7SUFDNUIsSUFBSUwsR0FBRyxDQUFDTSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3hCLElBQUk7WUFDRixNQUFNQyxJQUFJLEdBQUcsTUFBTVQsc0VBQXlCLENBQUM7Z0JBQzNDWSxLQUFLLEVBQUU7b0JBQUVSLE1BQU07aUJBQUU7Z0JBQ2pCUyxPQUFPLEVBQUU7b0JBQUVDLElBQUksRUFBRSxNQUFNO2lCQUFFO2FBQzFCLENBQUM7WUFFRixPQUFPWCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRyxJQUFJLENBQUMsQ0FBQztRQUNwQyxFQUFFLE9BQU9GLEtBQUssRUFBRTtZQUNkUSxPQUFPLENBQUNSLEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDLENBQUM7WUFDN0MsT0FBT0osR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFFLHNCQUFzQjthQUFFLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0gsQ0FBQztJQUVELG1DQUFtQztJQUNuQyxJQUFJTCxHQUFHLENBQUNNLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSTtZQUNGLE1BQU0sRUFBRVEsS0FBSyxHQUFFLEdBQUdkLEdBQUcsQ0FBQ2UsSUFBSTtZQUUxQixJQUFJLENBQUNELEtBQUssSUFBSUUsS0FBSyxDQUFDRixLQUFLLENBQUMsSUFBSUEsS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDeEMsT0FBT2IsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsS0FBSyxFQUFFLHlCQUF5QjtpQkFBRSxDQUFDLENBQUM7WUFDcEUsQ0FBQztZQUVELE1BQU1ZLEdBQUcsR0FBRyxNQUFNbkIsb0VBQXVCLENBQUM7Z0JBQ3hDcUIsSUFBSSxFQUFFO29CQUNKTCxLQUFLLEVBQUVNLFFBQVEsQ0FBQ04sS0FBSyxDQUFDO29CQUN0QlosTUFBTTtpQkFDUDthQUNGLENBQUM7WUFFRixPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDYSxHQUFHLENBQUMsQ0FBQztRQUNuQyxFQUFFLE9BQU9aLE1BQUssRUFBRTtZQUNkUSxPQUFPLENBQUNSLEtBQUssQ0FBQyxxQkFBcUIsRUFBRUEsTUFBSyxDQUFDLENBQUM7WUFDNUMsT0FBT0osR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFFLHNCQUFzQjthQUFFLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0gsQ0FBQztJQUVELHFCQUFxQjtJQUNyQixPQUFPSixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLEtBQUssRUFBRSxvQkFBb0I7S0FBRSxDQUFDLENBQUM7QUFDL0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3B1c2h1cC10cmFja2VyLy4vcGFnZXMvYXBpL3B1c2h1cHMvaW5kZXguanM/MDM4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnQGNsZXJrL25leHRqcy9zZXJ2ZXInO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBnZXRBdXRoKHJlcSk7XHJcbiAgXHJcbiAgaWYgKCF1c2VySWQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9KTtcclxuICB9XHJcblxyXG4gIC8vIEdFVCByZXF1ZXN0IHRvIGZldGNoIGxvZ3NcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGxvZ3MgPSBhd2FpdCBwcmlzbWEucHVzaHVwTG9nLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyB1c2VySWQgfSxcclxuICAgICAgICBvcmRlckJ5OiB7IGRhdGU6ICdkZXNjJyB9LFxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihsb2dzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGxvZ3M6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBmZXRjaCBsb2dzJyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFBPU1QgcmVxdWVzdCB0byBjcmVhdGUgYSBuZXcgbG9nXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBjb3VudCB9ID0gcmVxLmJvZHk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoIWNvdW50IHx8IGlzTmFOKGNvdW50KSB8fCBjb3VudCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6ICdWYWxpZCBjb3VudCBpcyByZXF1aXJlZCcgfSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGxvZyA9IGF3YWl0IHByaXNtYS5wdXNodXBMb2cuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBjb3VudDogcGFyc2VJbnQoY291bnQpLFxyXG4gICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5qc29uKGxvZyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBsb2c6JywgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBjcmVhdGUgbG9nJyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1ldGhvZCBub3QgYWxsb3dlZFxyXG4gIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0QXV0aCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1c2VySWQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXRob2QiLCJsb2dzIiwicHVzaHVwTG9nIiwiZmluZE1hbnkiLCJ3aGVyZSIsIm9yZGVyQnkiLCJkYXRlIiwiY29uc29sZSIsImNvdW50IiwiYm9keSIsImlzTmFOIiwibG9nIiwiY3JlYXRlIiwiZGF0YSIsInBhcnNlSW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/pushups/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/pushups/index.js"));
module.exports = __webpack_exports__;

})();