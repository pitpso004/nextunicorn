import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';


export default class DateUtils {
  static toCurrentLangFormat(date: string): string {
    moment().locale('en');
    let d = moment(date);
    let initDateText = d.lang('en').format('DD/MM/');
    initDateText += '' + (d.year() + 543);
    return initDateText;
  }

  static generatePreviousYearList(numPrev: number): Array<Number> {
    const years = new Array<Number>();
    let currentYear = new Date().getFullYear();
    years.push(currentYear);
    for (let y = 1; y <= numPrev; y++) {
      currentYear -= 1;
      years.push(currentYear);
    }
    return years;
  }

  static getCurrentYear() {
    return new Date().getFullYear();
  }

  static toDateTime(date : Date, time: string): Date {
    let array = time.split(":");
    try {
      date.setHours(parseInt(array[0]));
      date.setMinutes(parseInt(array[1]));
      return date;
    } catch {
      return new Date;
    }
  }
  static toFormat(date: Date, format = "YYYY-MM-DD"): string {
    if (date == null) return '';
    let d = moment(date);
    return d.format(format);
  }
  static toFormatTime(date: Date, format = "YYYY-MM-DD HH:mm"): string {
    if (date == null) return '';
    let d = moment(date);
    return d.format(format);
  }
  static toFormatTime24(date: Date, format = "DD/MM/YYYY HH:mm"): string {
    if (date == null) return '';
    let d = moment(date);
    return d.format(format);
  }

  static toFormatMin(date: Date, format = "YYYY-MM-DD HH:mm"): string {
    if (date == null) return '';
    let d = moment(date);
    return d.format(format);
  }
  static toFormat2(date: Date, format = "DD-MM-YYYY"): string {
    if (date == null) return '';
    let d = moment(date);
    return d.format(format);
  }
  static toFormat3(date: Date, format = "DD-MM-YYYY"): any {
    if (date == null) return new Date;
    let d = moment(date);
    return d.format(format);
  }

  static toFormat5(date: Date, format = "YYYY-MM-DD"): any {
    if (date == null) return '';
    let d = moment(date);
    return d.format(format);
  }

  static toDate(value: string, format = 'YYYY-MM-DD'): Date {
    if (value == null) { return new Date(); }
    const d = moment(value, format);
    return d.toDate();
  }
  static toDate1(value: Date, format = 'YYYY-MM-DD'): Date {
    if (value == null) { return new Date; }
    const d = moment(value, format);
    return d.toDate();
  }
  static toDefaultDate(value: any): Date{
    if (value == null) { return new Date; }
    const d = moment(value, "YYYY-MM-DD'T'HH:mm:ss");
    return d.toDate();
  }
  static addTime(date: Date, time: number): Date {
    const newDate = date;
    newDate.setHours(date.getHours() + time);
    return newDate;
  }
  static addDays(date: Date, days: number): Date {
    const newDate = new Date(); 
    newDate.setFullYear(date.getFullYear());
    newDate.setMonth(date.getMonth());
    newDate.setDate(Number(date.getDate())+ Number(days));  
    return newDate;
  }
  static decreaseDays(date: Date, days: number): Date {
    const newDate = new Date();
    newDate.setFullYear(date.getFullYear());
    newDate.setMonth(date.getMonth());
    newDate.setDate(date.getDate() - days);
    return newDate;
  }
  static addMonths(date: Date, month: number): Date {
    const newDate = new Date();
    newDate.setFullYear(date.getFullYear());
    newDate.setMonth(date.getMonth() + month);
    newDate.setDate(date.getDate());
    return newDate;
  }

  static toDate2(value: string, format = 'YYYY-MM-DD HH:mm') {
    if (value == null) { return null; }
    const d = moment(value, format);
    return d.toDate();
  }

  static toDateFormat(value: string, format = 'YYYY-MM-DD  HH:mm') {
    if (value == null) { return null; }
    let dated = new Date(value);
    return dated;
  }

  static toDateFormatYYYYMMDD(value: string) {
    if (value == null) { return null; }
    let dated = moment(value, 'DD-MM-YYYY');
    return dated.format("YYYY-MM-DD");
  }

  static toDateFormatYYYYMMDD2(value: Date) {
    if (value == null) { return null; }
    let dated = moment(value, 'DD-MM-YYYY');
    return dated.format("YYYY-MM-DD");
  }

  static toFormatNormal(date: Date, format = "DD-MM-YYYY"): string {
    if (date == null) return '';
    let d = moment(date);
    return d.format(format);
  }
  static toFormatDate(date: Date, format = "DD-MM-YYYY  HH:mm"): string {
    if (date == null) return '';
    let d = moment(date);
    return d.format(format);
  }
  static toFormatDateYear(date: Date, format = "YYYY-MM-DD  HH:mm"): string {
    if (date == null) return '';
    let d = moment(date);
    return d.format(format);
  }
  static toDateByNgbDate(ngbDate: NgbDate): Date {
    const jsDate = new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day + 1);
    return jsDate;
  }

  static addHours(date: Date, days: number): Date {
    return new Date(new Date(date).setHours(date.getHours() + days));
  }
}
