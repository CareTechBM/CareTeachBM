import { Router } from "express";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { createPatient } from "../Controllers/patients.controller.js";

const router = Router();

router.post(
    "/create",
    [
        check("name"),
        check("lastName"),
        check("birthdate"),
        check("sex"),
        check("address"),
        check("phone"),
        check("email"),
        check("registrationDate"),
        validarCampos,
        validarJWT,
    ],
    createPatient
);

export default router;