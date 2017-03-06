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

    // 去除每个第七天的时间
    if (minute >= 7 * 24 * 60) {
        minute = minute - Math.floor(minute / 7 / 24 / 60) * 24 * 60;
    }

    // 计算余剩天数
    let days = Math.floor(minute / 24 / 60),
        // 去除余剩天数后剩下的累积时间
        leftMinute = minute - 24 * 60 * days,
        // 累积时间范围统计
        dailyChargeRange;
    if (leftMinute) {
        dailyChargeRange = (Math.floor(leftMinute / 60) > 1) ? leftMinute : 60;
    } else {
        dailyChargeRange = leftMinute;
    }

    dailyChargeRange = (dailyChargeRange > 4.5 * 60) ? 4.5 * 60 : dailyChargeRange;

    return days * 9 + (dailyChargeRange / 60) * 2;
}

function getLongTermIndoorParkingFeeByMinute(minute) {
    /**
     * 长期停车（车库内）
     * 每小时2元，每天收费上限12元
     * 第七天免费
     */

    if (minute > 6 * 24 * 60) {
        minute = minute - Math.floor(minute / 7 / 24 / 60) * 24 * 60;
    }

    let days = Math.floor(minute / 24 / 60),
        leftMinute = minute - 24 * 60 * days,
        dailyChargeRange;
    if (leftMinute) {
        dailyChargeRange = (Math.floor(leftMinute / 60) > 1) ? leftMinute : 60;
    } else {
        dailyChargeRange = leftMinute;
    }

    dailyChargeRange = (dailyChargeRange > 6 * 60) ? 6 * 60 : dailyChargeRange;

    return days * 12 + (dailyChargeRange / 60) * 2;
}

function getLongTermOutdoorParkingFeeByMinute(minute) {
    /**
     * 长期停车（车库外）
     * 每小时2元，每天收费上限10元
     * 第七天免费
     */

    if (minute > 6 * 24 * 60) {
        minute = minute - Math.floor(minute / 7 / 24 / 60) * 24 * 60;
    }

    let days = Math.floor(minute / 24 / 60),
        leftMinute = minute - 24 * 60 * days,
        dailyChargeRange;
    if (leftMinute) {
        dailyChargeRange = (Math.floor(leftMinute / 60) > 1) ? leftMinute : 60;
    } else {
        dailyChargeRange = leftMinute;
    }

    dailyChargeRange = (dailyChargeRange > 5 * 60) ? 5 * 60 : dailyChargeRange;

    return days * 10 + (dailyChargeRange / 60) * 2;
}

function getValidMinute(minute) {

    let _min;

    if (Math.floor(minute / 7 / 24 / 60) > 1) {

    }

}