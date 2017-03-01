function getValetParkingFeeByMinute(minute) {
    /**
     * 代客泊车
     *
     * 每天18元，5小时内（含5小时）优惠6元
     *
     */

    if (minute > 0 && minute <= 5 * 60) {
        return 12;
    } else {
        return 18 * Math.ceil(minute / 24 / 60);
    }
}

function getShortTermParkingFeeByMinute(minute) {
    /**
     * 临时停车
     *
     * 第一小时2元，之后每半个小时1元
     * 每天最多24元
     */
    if (minute <= 60) {
        return 2;
    } else {
        let days = Math.floor(minute / 24 / 60);
        if (days >= 1) {
            return 24 * days + (minute - days * 24 * 60) / 30;
        } else {
            return Math.floor(minute / 30) > 24 ? 24 : Math.floor(minute / 30);
        }
    }
}

function getEconomyParkingFeeByMinute(minute) {
    /**
     * 经济停车
     *
     * 每小时2元，每天上限9元
     * 第七天免费
     */
}

function getLongTermIndoorParkingFeeByMinute(minute) {
    /**
     * 长期停车（车库内）
     * 每小时2元，每天收费上限12元
     * 第七天免费
     */
}

function getLongTermOutdoorParkingFeeByMinute(minute) {
    /**
     * 长期停车（车库外）
     * 每小时2元，每天收费上限10元
     * 第七天免费
     */
}