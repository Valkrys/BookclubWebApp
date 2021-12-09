import { Component, OnInit } from '@angular/core';
import { startOfDay } from 'date-fns';
import { CalendarView, CalendarEvent } from 'angular-calendar';
import {Book} from "../models/Book";
import {Meeting} from "../models/Meeting";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.currentBook.title = "Placement book title";
    this.nextMeeting.date = new Date("2022-01-02")
    this.nextMeeting.chapter = "Until chapter 3: name of chapter"
  }

  //currentImage: HTMLImageElement = new HTMLImageElement();
  currentBook: Book = new Book();
  nextMeeting: Meeting = new Meeting();

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  setView(view: CalendarView) {
    this.view = view;
  }

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: "Bookclub Meeting",
    }
  ]

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    //let x=this.adminService.dateFormat(date)
    //this.openAppointmentList(x)
  }

}
