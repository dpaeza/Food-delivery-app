import { DateTime } from "luxon";

export const getFormattedDate = () => {
    const now = DateTime.now();
    return now.toFormat("dd.MM.yyyy");
}
