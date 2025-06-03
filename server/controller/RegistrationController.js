//данные подключения к БД
import {auth_key, base_name} from "../ServerData.js";
//сервер
import express from "express";

import Airtable from "airtable-node";
import {reFormaterResponseData} from "../ServerDataFunction.js";


/*
* работа с роутом (уникальным путем коннтроллера)
* UserController: получение информации о пользователях
 */
const router = express.Router();
const registrationsTable = new Airtable({apiKey: auth_key})
    .base(base_name)
    .table("Registrations"); // Убедитесь в правильности названия таблицы

router.post('/', async (req, res) => {
    try {
    console.log(req.body)
        const { FullName, Phone, Group, UserId } = req.body;
        
     /*   if (!FullName || !Phone || !Group) {
            return res.status(400).json({ 
                success: false,
                error: "Не заполнены обязательные поля" 
            });
        }
*/
        const record = await registrationsTable.create(
req.body            
        );

        res.status(201).json({ 
            success: true,
            message: "Запись создана успешно",
            record: reFormaterResponseData([record])
        });
    } catch (error) {
        console.error("Ошибка при создании записи:", error);
        res.status(500).json({ 
            success: false,
            error: error.message || "Ошибка при создании записи" 
        });
    }
});
export default router;