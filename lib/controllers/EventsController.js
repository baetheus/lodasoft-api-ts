"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsEventsEventViewModel_1 = require("../definitions/LELodasoftCommonModelsEventsEventViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.eventsController = Reader_1.asks(function (e) { return ({
    Events_PostNewEvent: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsEventsEventViewModel_1.LELodasoftCommonModelsEventsEventViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Events/NewEvent",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsEventsEventViewModel_1.LELodasoftCommonModelsEventsEventViewModelIO));
    },
    Events_PostDropEvent: function (eventid, delay, allday) {
        return e.apiClient
            .request({
            url: "/api/Events/DropEvent/" + encodeURIComponent(io_ts_1.number.encode(eventid).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(delay).toString()) + "/" + encodeURIComponent(io_ts_1.boolean.encode(allday).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Events_PostResizeEvent: function (eventid, delay, addDays) {
        return e.apiClient
            .request({
            url: "/api/Events/ResizeEvent/" + encodeURIComponent(io_ts_1.number.encode(eventid).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(delay).toString()) + "/" + encodeURIComponent(io_ts_1.boolean.encode(addDays).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Events_UpdateEvent: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsEventsEventViewModel_1.LELodasoftCommonModelsEventsEventViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Events/UpdateEvent",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsEventsEventViewModel_1.LELodasoftCommonModelsEventsEventViewModelIO));
    },
    Events_DeleteEvent: function (eventId) {
        return e.apiClient
            .request({
            url: "/api/Events/DeleteEvent/" + encodeURIComponent(io_ts_1.number.encode(eventId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Events_GetAllEvents: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({
                filterdate: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
                applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
                leadId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
            }),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Events/AllEvents",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsEventsEventViewModel_1.LELodasoftCommonModelsEventsEventViewModelIO)));
    },
    Events_GetAllEventScheduling: function (companyId, userId, isAdmin) {
        return e.apiClient
            .request({
            url: "/api/Events/AllEventScheduling/" + encodeURIComponent(io_ts_1.number.encode(companyId).toString()) + "/" + encodeURIComponent(io_ts_1.string.encode(userId).toString()) + "/" + encodeURIComponent(io_ts_1.boolean.encode(isAdmin).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsEventsEventViewModel_1.LELodasoftCommonModelsEventsEventViewModelIO)));
    },
    Events_PostRemoveListEvent: function (parameters) {
        var encoded = io_ts_1.partial({ body: io_ts_1.array(io_ts_1.number) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Events/RemoveListEvent",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.boolean));
    },
    Events_GetUserName: function (userId) {
        return e.apiClient
            .request({
            url: "/api/Events/UserName/" + encodeURIComponent(io_ts_1.string.encode(userId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.string));
    },
}); });
//# sourceMappingURL=EventsController.js.map