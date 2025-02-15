/// <reference types="xdate" />
export declare function padNumber(n: number): string | number;
export declare function xdateToData(date: XDate | string): {
    year: any;
    month: any;
    day: any;
    timestamp: any;
    dateString: string;
    nativeEvent: {
        pageX: number;
        pageY: number;
        locationX: number;
        locationY: number;
    };
};
export declare function parseDate(d?: any): any;
export declare function toMarkingFormat(d: XDate): string;
