exports.id = 783;
exports.ids = [783];
exports.modules = {

/***/ 4783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ form_GeneralForm)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/lib/form/css/index.css
var css = __webpack_require__(91314);
// EXTERNAL MODULE: ./src/app/classes.ts
var classes = __webpack_require__(87073);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(3103);
;// CONCATENATED MODULE: ./src/lib/form/components/veggie/CheckMark.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const CheckMark = ({ active })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(CheckMarkWrapperColor, {
        $active: active,
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            version: "1.0",
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 1280.000000 1185.000000",
            className: "CheckMark",
            children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                transform: "translate(0.000000,1185.000000) scale(0.100000,-0.100000)",
                fill: "#000000",
                stroke: "none",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M12595 11778 c-798 -464 -1551 -977 -2329 -1587 -2298 -1802 -4607 -4276 -6680 -7159 -49 -67 -92 -122 -97 -122 -5 0 -753 420 -1662 934 -908 513 -1666 940 -1683 949 l-30 15 -42 -51 c-35 -44 -39 -54 -28 -67 7 -8 919 -1066 2025 -2350 1826 -2118 2015 -2335 2044 -2338 l32 -3 232 463 c1660 3307 3383 5918 5493 8323 793 905 1778 1912 2655 2714 105 95 201 184 214 197 l24 22 -37 51 c-21 28 -43 51 -49 51 -7 -1 -43 -19 -82 -42z"
                })
            })
        })
    });
};
const CheckMarkWrapperColor = (0,styled_components_cjs/* default */.ZP)("div")`
  svg {
    g {
      fill: ${(props)=>props.$active ? "green" : "black"};
    }
  }
`;
/* harmony default export */ const veggie_CheckMark = (CheckMark);

;// CONCATENATED MODULE: ./src/lib/form/components/veggie/CrossRefuse.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const CrossRefuse = ({ active })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(CrossRefuseWrapperColor, {
        $active: active,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "CrossRefuse",
            children: "X"
        })
    });
};
const CrossRefuseWrapperColor = (0,styled_components_cjs/* default */.ZP)("div")`
  div {
    color: ${(props)=>props.$active ? "red" : "black"};
  }
`;
/* harmony default export */ const veggie_CrossRefuse = (CrossRefuse);

;// CONCATENATED MODULE: ./src/lib/form/components/veggie/VeggieChoose.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const VeggieChoose = ({ dish })=>{
    const [isPressed, setPressed] = (0,react_.useState)(false);
    const [yes, setYes] = (0,react_.useState)(false);
    const [no, setNo] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        // changeEventHandler(yes, 'vegetarian')
        dish.vegetarian = yes;
    }, [
        yes,
        dish
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "VeggieChooseWrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                onClick: ()=>{
                    setPressed(true);
                    setYes(true);
                    setNo(false);
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(veggie_CheckMark, {
                    active: isPressed && yes
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                onClick: ()=>{
                    setPressed(true);
                    setNo(true);
                    setYes(false);
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(veggie_CrossRefuse, {
                    active: isPressed && no
                })
            })
        ]
    });
};
/* harmony default export */ const veggie_VeggieChoose = (VeggieChoose);

;// CONCATENATED MODULE: ./src/lib/form/components/AddDishForm.tsx



const AddDishForm = ({ changeEventHandler, createDishHandler, closeFormHandler, dish })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "InputCustom",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "WhiteColorForInputText",
                        children: "Food name:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        onChange: (e)=>changeEventHandler(e.target.value, "title"),
                        placeholder: "Name",
                        className: "WhiteColorForInputText"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "InputCustom",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "WhiteColorForInputText",
                        children: "Price:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "number",
                        onChange: (e)=>changeEventHandler(e.target.value, "price"),
                        placeholder: "Price",
                        className: "WhiteColorForInputText"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "InputCustom",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "WhiteColorForInputText",
                        children: "Calories:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "number",
                        onChange: (e)=>changeEventHandler(e.target.value, "calories"),
                        placeholder: "Calories",
                        className: "WhiteColorForInputText"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "InputCustom",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "WhiteColorForInputText",
                        children: "Is it vegetarian?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(veggie_VeggieChoose, {
                        dish: dish
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "InputCustom",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "WhiteColorForInputText",
                        children: "Cuisine:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        value: dish.cuisine,
                        onChange: (e)=>changeEventHandler(e.target.value, "cuisine"),
                        placeholder: "Cuisine",
                        className: "WhiteColorForInputText"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "InputCustom",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "WhiteColorForInputText",
                        children: "Link to image:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        onChange: (e)=>changeEventHandler(e.target.value, "img"),
                        placeholder: "URL",
                        className: "WhiteColorForInputText"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "InputCustom",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "WhiteColorForInputText",
                        children: "Link to the dish:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        onChange: (e)=>changeEventHandler(e.target.value, "link"),
                        placeholder: "URL",
                        className: "WhiteColorForInputText"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ButtonsWrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "ExtraButton",
                        onClick: ()=>{
                            createDishHandler();
                        },
                        children: "Add"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "ExtraButton",
                        onClick: ()=>{
                            closeFormHandler();
                        },
                        children: "Cancel"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_AddDishForm = (AddDishForm);

;// CONCATENATED MODULE: ./src/lib/form/components/ConfirmationForm.tsx


const ConfirmationForm = ({ closeFormHandler, deleteDishHandler })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "WhiteColorForInputText",
                children: "Do you really want to delete this dish?"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ButtonsWrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "ExtraButton",
                        onClick: ()=>{
                            deleteDishHandler();
                        },
                        children: "Delete"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "ExtraButton",
                        onClick: ()=>{
                            closeFormHandler();
                        },
                        children: "Cancel"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ConfirmationForm = (ConfirmationForm);

;// CONCATENATED MODULE: ./src/lib/form/components/AddToMenuForm.tsx


const AddToMenuForm = ({ addToMenuHandler, closeFormHandler })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "WhiteColorForInputText",
                children: "Do you really want to add this dish to your menu?"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ButtonsWrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "ExtraButton",
                            onClick: ()=>{
                                addToMenuHandler();
                            },
                            children: "Add"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "ExtraButton",
                        onClick: ()=>{
                            closeFormHandler();
                        },
                        children: "Cancel"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_AddToMenuForm = (AddToMenuForm);

;// CONCATENATED MODULE: ./src/lib/form/components/AuthFailedForm.tsx


const AuthFailedForm = ({ closeFormHandler })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "WhiteColorForInputText",
                children: "Authentication was failed! Please, check your input data"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ButtonsWrapper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "ExtraButton",
                    onClick: ()=>{
                        closeFormHandler();
                    },
                    children: "Close"
                })
            })
        ]
    });
};
/* harmony default export */ const components_AuthFailedForm = (AuthFailedForm);

;// CONCATENATED MODULE: ./src/lib/form/components/AuthWasNotDoneForm.tsx


const AuthWasNotDone = ({ closeFormHandler })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "WhiteColorForInputText",
                children: "You are not logged in!"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ButtonsWrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/auth",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "ExtraButton",
                            onClick: ()=>{
                                closeFormHandler();
                            },
                            children: "Log In"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "ExtraButton",
                        onClick: ()=>{
                            closeFormHandler();
                        },
                        children: "Close"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const AuthWasNotDoneForm = (AuthWasNotDone);

;// CONCATENATED MODULE: ./src/lib/form/components/DifferentPasswordsForm.tsx


const DifferentPasswordsForm = ({ closeFormHandler })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "WhiteColorForInputText",
                children: "Passwords should be the same!"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ButtonsWrapper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "ExtraButton",
                    onClick: ()=>{
                        closeFormHandler();
                    },
                    children: "Close"
                })
            })
        ]
    });
};
/* harmony default export */ const components_DifferentPasswordsForm = (DifferentPasswordsForm);

;// CONCATENATED MODULE: ./src/lib/form/components/AuthWasCompletedForm.tsx



const AuthWasCompletedForm = ({ closeFormHandler })=>{
    let check = localStorage.getItem(classes/* userInfoKey */.gZ);
    let link = "/auth";
    if (check) {
        let userToken = JSON.parse(localStorage.getItem(classes/* userInfoKey */.gZ));
        link = `/auth/${userToken.admin ? "admin" : "user"}/${userToken.token}`;
    } else {
        console.log("No info in local storage");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "WhiteColorForInputText CompletedPosition",
                children: "Success!"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ButtonsWrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: link,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "ExtraButton",
                            onClick: ()=>{
                                closeFormHandler();
                            },
                            children: "Go to account"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "ExtraButton",
                            onClick: ()=>{
                                closeFormHandler();
                            },
                            children: "Go to home page"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_AuthWasCompletedForm = (AuthWasCompletedForm);

;// CONCATENATED MODULE: ./src/lib/form/components/LogOutForm.tsx


const LogOutForm = ({ closeFormHandler, logOutHandler })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "WhiteColorForInputText",
                children: "Do you really want to log out?"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ButtonsWrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/auth",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "ExtraButton",
                            onClick: ()=>{
                                logOutHandler();
                            },
                            children: "Log Out"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "ExtraButton",
                        onClick: ()=>{
                            closeFormHandler();
                        },
                        children: "Cancel"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_LogOutForm = (LogOutForm);

;// CONCATENATED MODULE: ./src/lib/form/components/DeleteAccForm.tsx



const DeleteAccForm = ({ closeFormHandler, deleteAccHandler })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "WhiteColorForInputText",
                children: "Do you really want to delete your account?"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ButtonsWrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "ExtraButton",
                            onClick: ()=>{
                                deleteAccHandler();
                                setTimeout(function() {
                                    window.location.href = "/auth";
                                }, classes/* timeForReloading */.i4);
                            },
                            children: "Delete"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "ExtraButton",
                        onClick: ()=>{
                            closeFormHandler();
                        },
                        children: "Cancel"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_DeleteAccForm = (DeleteAccForm);

// EXTERNAL MODULE: ./src/app/enigma.ts
var enigma = __webpack_require__(71089);
// EXTERNAL MODULE: ./src/app/fetch.ts + 1 modules
var fetch = __webpack_require__(38612);
;// CONCATENATED MODULE: ./src/lib/form/components/ChangePasswordForm.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const ChangePasswordForm = ({ closeFormHandler })=>{
    const [oldPassword, setOldPassword] = (0,react_.useState)("");
    const [newPassword, setNewPassword] = (0,react_.useState)("");
    const [oldPasswordPH, setOldPasswordPH] = (0,react_.useState)("");
    const [newPasswordPH, setNewPasswordPH] = (0,react_.useState)("");
    async function changeHandler() {
        const user = JSON.parse(localStorage.getItem(classes/* userInfoKey */.gZ));
        setNewPasswordPH("");
        setOldPasswordPH("");
        let first = false;
        let second = false;
        if ((0,enigma/* decodeToken */.T)(user.token, oldPassword) !== user.name) {
            setOldPasswordPH("incorrect!");
            setOldPassword("");
            first = true;
        }
        if (newPassword.length < classes/* MIN_PASSWORD_LENGTH */.lo) {
            setNewPasswordPH("too short!");
            setNewPassword("");
            second = true;
        }
        if (newPassword.length > classes/* MAX_PASSWORD_LENGTH */.Ef) {
            setNewPasswordPH("too long!");
            setNewPassword("");
            second = true;
        }
        if (first || second) {
            return;
        }
        await (0,fetch/* changePassword */.Cp)(newPassword);
        setTimeout(function() {
            const newToken = (0,enigma/* encodeName */.Q)(user.name, newPassword);
            window.location.href = `/auth/${user.admin ? "admin" : "user"}/${newToken}`;
        }, classes/* timeForReloading */.i4);
        closeFormHandler();
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "InputCustom",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "WhiteColorForInputText",
                        children: "Old Password:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "password",
                        onChange: (e)=>setOldPassword(e.target.value),
                        placeholder: oldPasswordPH,
                        value: oldPassword,
                        className: "WhiteColorForInputText"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "InputCustom",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "WhiteColorForInputText",
                        children: "New Password:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "password",
                        onChange: (e)=>setNewPassword(e.target.value),
                        placeholder: newPasswordPH,
                        value: newPassword,
                        className: "WhiteColorForInputText"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ButtonsWrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "ExtraButton",
                        onClick: ()=>{
                            changeHandler().then();
                        },
                        children: "Change"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "ExtraButton",
                        onClick: ()=>{
                            closeFormHandler();
                        },
                        children: "Cancel"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_ChangePasswordForm = (ChangePasswordForm);

;// CONCATENATED MODULE: ./src/lib/form/GeneralForm.tsx














const GeneralForm = ({ type, setIsOpenForm, changeEventHandler, createDishHandler, closeFormHandler, deleteHandler, dish, addToMenuHandler })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "FormPositionWrapper",
        onClick: ()=>setIsOpenForm(false),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "FormWrapper",
            onClick: (e)=>e.stopPropagation(),
            children: [
                type === classes/* addDishFormType */.m6 ? /*#__PURE__*/ jsx_runtime_.jsx(components_AddDishForm, {
                    changeEventHandler: changeEventHandler,
                    createDishHandler: createDishHandler,
                    closeFormHandler: closeFormHandler,
                    dish: dish
                }) : null,
                type === classes/* confirmationFormType */.$o ? /*#__PURE__*/ jsx_runtime_.jsx(components_ConfirmationForm, {
                    closeFormHandler: closeFormHandler,
                    deleteDishHandler: deleteHandler
                }) : null,
                type === classes/* addToMenuFormType */.x3 ? /*#__PURE__*/ jsx_runtime_.jsx(components_AddToMenuForm, {
                    addToMenuHandler: addToMenuHandler,
                    closeFormHandler: closeFormHandler
                }) : null,
                type === classes/* authFailedFormType */.vw ? /*#__PURE__*/ jsx_runtime_.jsx(components_AuthFailedForm, {
                    closeFormHandler: closeFormHandler
                }) : null,
                type === classes/* authWasNotDoneFormType */.uN ? /*#__PURE__*/ jsx_runtime_.jsx(AuthWasNotDoneForm, {
                    closeFormHandler: closeFormHandler
                }) : null,
                type === classes/* differentPasswordsFormType */.Z3 ? /*#__PURE__*/ jsx_runtime_.jsx(components_DifferentPasswordsForm, {
                    closeFormHandler: closeFormHandler
                }) : null,
                type === classes/* authCompletedFormType */.zk ? /*#__PURE__*/ jsx_runtime_.jsx(components_AuthWasCompletedForm, {
                    closeFormHandler: closeFormHandler
                }) : null,
                type === classes/* logOutConfirmFormType */.jq ? /*#__PURE__*/ jsx_runtime_.jsx(components_LogOutForm, {
                    closeFormHandler: closeFormHandler,
                    logOutHandler: deleteHandler
                }) : null,
                type === classes/* deleteAccountFormType */.sO ? /*#__PURE__*/ jsx_runtime_.jsx(components_DeleteAccForm, {
                    closeFormHandler: closeFormHandler,
                    deleteAccHandler: deleteHandler
                }) : null,
                type === classes/* changePasswordFormType */.Ep ? /*#__PURE__*/ jsx_runtime_.jsx(components_ChangePasswordForm, {
                    closeFormHandler: closeFormHandler
                }) : null
            ]
        })
    });
};
/* harmony default export */ const form_GeneralForm = (GeneralForm);


/***/ }),

/***/ 91314:
/***/ (() => {



/***/ })

};
;