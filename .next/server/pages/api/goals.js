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
exports.id = "pages/api/goals";
exports.ids = ["pages/api/goals"];
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

/***/ "(api)/./pages/api/goals/index.js":
/*!**********************************!*\
  !*** ./pages/api/goals/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"@clerk/nextjs/server\");\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(api)/./lib/prisma.js\");\n\n\nasync function handler(req, res) {\n    const { userId  } = (0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.getAuth)(req);\n    if (!userId) {\n        return res.status(401).json({\n            error: \"Unauthorized\"\n        });\n    }\n    // GET request to fetch user's goal\n    if (req.method === \"GET\") {\n        try {\n            const userGoal = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userGoal.findUnique({\n                where: {\n                    userId\n                }\n            });\n            return res.status(200).json(userGoal || {\n                dailyGoal: 0\n            });\n        } catch (error) {\n            console.error(\"Error fetching goal:\", error);\n            return res.status(500).json({\n                error: \"Failed to fetch goal\"\n            });\n        }\n    }\n    // POST request to update user's goal\n    if (req.method === \"POST\") {\n        try {\n            const { dailyGoal  } = req.body;\n            if (!dailyGoal || isNaN(dailyGoal) || dailyGoal <= 0) {\n                return res.status(400).json({\n                    error: \"Valid daily goal is required\"\n                });\n            }\n            const goal = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userGoal.upsert({\n                where: {\n                    userId\n                },\n                update: {\n                    dailyGoal: parseInt(dailyGoal)\n                },\n                create: {\n                    userId,\n                    dailyGoal: parseInt(dailyGoal)\n                }\n            });\n            return res.status(200).json(goal);\n        } catch (error1) {\n            console.error(\"Error updating goal:\", error1);\n            return res.status(500).json({\n                error: \"Failed to update goal\"\n            });\n        }\n    }\n    // Method not allowed\n    return res.status(405).json({\n        error: \"Method not allowed\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ29hbHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUNOO0FBRTFCLGVBQWVFLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxFQUFFQyxNQUFNLEdBQUUsR0FBR0wsNkRBQU8sQ0FBQ0csR0FBRyxDQUFDO0lBRS9CLElBQUksQ0FBQ0UsTUFBTSxFQUFFO1FBQ1gsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxLQUFLLEVBQUUsY0FBYztTQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsbUNBQW1DO0lBQ25DLElBQUlMLEdBQUcsQ0FBQ00sTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixJQUFJO1lBQ0YsTUFBTUMsUUFBUSxHQUFHLE1BQU1ULHVFQUEwQixDQUFDO2dCQUNoRFcsS0FBSyxFQUFFO29CQUFFUCxNQUFNO2lCQUFFO2FBQ2xCLENBQUM7WUFFRixPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRyxRQUFRLElBQUk7Z0JBQUVHLFNBQVMsRUFBRSxDQUFDO2FBQUUsQ0FBQyxDQUFDO1FBQzVELEVBQUUsT0FBT0wsS0FBSyxFQUFFO1lBQ2RNLE9BQU8sQ0FBQ04sS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUMsQ0FBQztZQUM3QyxPQUFPSixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsc0JBQXNCO2FBQUUsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7SUFDSCxDQUFDO0lBRUQscUNBQXFDO0lBQ3JDLElBQUlMLEdBQUcsQ0FBQ00sTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixJQUFJO1lBQ0YsTUFBTSxFQUFFSSxTQUFTLEdBQUUsR0FBR1YsR0FBRyxDQUFDWSxJQUFJO1lBRTlCLElBQUksQ0FBQ0YsU0FBUyxJQUFJRyxLQUFLLENBQUNILFNBQVMsQ0FBQyxJQUFJQSxTQUFTLElBQUksQ0FBQyxFQUFFO2dCQUNwRCxPQUFPVCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxLQUFLLEVBQUUsOEJBQThCO2lCQUFFLENBQUMsQ0FBQztZQUN6RSxDQUFDO1lBRUQsTUFBTVMsSUFBSSxHQUFHLE1BQU1oQixtRUFBc0IsQ0FBQztnQkFDeENXLEtBQUssRUFBRTtvQkFBRVAsTUFBTTtpQkFBRTtnQkFDakJjLE1BQU0sRUFBRTtvQkFBRU4sU0FBUyxFQUFFTyxRQUFRLENBQUNQLFNBQVMsQ0FBQztpQkFBRTtnQkFDMUNRLE1BQU0sRUFBRTtvQkFBRWhCLE1BQU07b0JBQUVRLFNBQVMsRUFBRU8sUUFBUSxDQUFDUCxTQUFTLENBQUM7aUJBQUU7YUFDbkQsQ0FBQztZQUVGLE9BQU9ULEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNVLElBQUksQ0FBQyxDQUFDO1FBQ3BDLEVBQUUsT0FBT1QsTUFBSyxFQUFFO1lBQ2RNLE9BQU8sQ0FBQ04sS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxNQUFLLENBQUMsQ0FBQztZQUM3QyxPQUFPSixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsdUJBQXVCO2FBQUUsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7SUFDSCxDQUFDO0lBRUQscUJBQXFCO0lBQ3JCLE9BQU9KLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsS0FBSyxFQUFFLG9CQUFvQjtLQUFFLENBQUMsQ0FBQztBQUMvRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHVzaHVwLXRyYWNrZXIvLi9wYWdlcy9hcGkvZ29hbHMvaW5kZXguanM/Y2ZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSAnQGNsZXJrL25leHRqcy9zZXJ2ZXInO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgdXNlcklkIH0gPSBnZXRBdXRoKHJlcSk7XHJcbiAgXHJcbiAgaWYgKCF1c2VySWQpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9KTtcclxuICB9XHJcblxyXG4gIC8vIEdFVCByZXF1ZXN0IHRvIGZldGNoIHVzZXIncyBnb2FsXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB1c2VyR29hbCA9IGF3YWl0IHByaXNtYS51c2VyR29hbC5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyB1c2VySWQgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlckdvYWwgfHwgeyBkYWlseUdvYWw6IDAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBnb2FsOicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gZmV0Y2ggZ29hbCcgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBQT1NUIHJlcXVlc3QgdG8gdXBkYXRlIHVzZXIncyBnb2FsXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYWlseUdvYWwgfSA9IHJlcS5ib2R5O1xyXG4gICAgICBcclxuICAgICAgaWYgKCFkYWlseUdvYWwgfHwgaXNOYU4oZGFpbHlHb2FsKSB8fCBkYWlseUdvYWwgPD0gMCkge1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnVmFsaWQgZGFpbHkgZ29hbCBpcyByZXF1aXJlZCcgfSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGdvYWwgPSBhd2FpdCBwcmlzbWEudXNlckdvYWwudXBzZXJ0KHtcclxuICAgICAgICB3aGVyZTogeyB1c2VySWQgfSxcclxuICAgICAgICB1cGRhdGU6IHsgZGFpbHlHb2FsOiBwYXJzZUludChkYWlseUdvYWwpIH0sXHJcbiAgICAgICAgY3JlYXRlOiB7IHVzZXJJZCwgZGFpbHlHb2FsOiBwYXJzZUludChkYWlseUdvYWwpIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKGdvYWwpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgZ29hbDonLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRmFpbGVkIHRvIHVwZGF0ZSBnb2FsJyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1ldGhvZCBub3QgYWxsb3dlZFxyXG4gIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiZ2V0QXV0aCIsInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1c2VySWQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXRob2QiLCJ1c2VyR29hbCIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImRhaWx5R29hbCIsImNvbnNvbGUiLCJib2R5IiwiaXNOYU4iLCJnb2FsIiwidXBzZXJ0IiwidXBkYXRlIiwicGFyc2VJbnQiLCJjcmVhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/goals/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/goals/index.js"));
module.exports = __webpack_exports__;

})();