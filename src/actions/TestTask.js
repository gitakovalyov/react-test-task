import {SAVE_ITEMS} from "../constants/TestTask";

export const saveItems = data => ({
    type: SAVE_ITEMS,
    data,
});
