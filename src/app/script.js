export default class MVPPlayer {
    constructor(credits, nickname, maxSurvivalHours, maxDefenseRounds, image) {
        this._credits = credits;
        this._nickname = nickname;
        this._maxSurvivalHours = maxSurvivalHours;
        this._maxDefenseRounds = maxDefenseRounds;
        this._image = image;
    }

    getCredits() {
        const formatter = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"});
        return formatter.format(this._credits);
    }

    getNickname() {
        return this._nickname;
    }

    getMaxSurvivalHours() {
        const sign = (this._maxSurvivalHours >= 0) ? 1 : -1;
        const number = this._maxSurvivalHours * sign;

        const hour = Math.floor(number);
        const min = 1 / 60;
        const dec_part = min * Math.round((number - hour) / min);

        let minute = Math.floor(dec_part * 60) + "";
        if (minute.length < 2) {
            minute = "0" + minute;
        }

        return (sign === 1 ? "" : "-") + hour + "H" + " " + minute + "M";
    }

    getMaxDefenseRounds() {
        return this._maxDefenseRounds;
    }

    getImage() {
        return this._image;
    }
}
