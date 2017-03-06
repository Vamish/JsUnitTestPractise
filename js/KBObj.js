import _ from "lodash";
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let mock = new MockAdapter(axios);

mock.onPost(/\/_api\/page\/deletes?SiteId=/).reply(200, {
    success: true,
    messages: ['success']
});

export default function KBObj(type, data) {

    this._siteId = window.siteId || "FAKE_SITE_ID";
    this._type = type;
    this._model = data || null;

    this.getList = function () {
        let queryUrl = "/_api/" + this._type + "/all?SiteId=" + this._siteId;
    };

    this.Delete = function (list, successCb, failCb) {
        let self = this,
            queryUrl = "/_api/" + this._type + "/deletes?SiteId=" + this._siteId;

        axios.post(queryUrl, {
            ids: JSON.stringify(list)
        }).then(function (res) {
            if (res) {
                if (successCb && typeof successCb === "function") {
                    successCb();
                }

                _.forEach(list, function (del) {
                    let _idx = _.findIndex(self._model, function (m) {
                        return m = del;
                    });

                    self._model.splice(_idx, 1);
                })
            } else {
                if (failCb && typeof failCb === "function") {
                    failCb();
                }
            }
        }).catch(function (err) {
            console.log(err);
        })
    };
}