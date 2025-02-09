import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { QuestionDetails, UserDetails } from 'src/app/shared/models';
import { EventService, QuestionService, UserService } from 'src/app/shared/services';
import { arrowLeftIcon, thumbsUpIcon, thumbsDownIcon } from '../../../shared/constants';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {
  faArrowLeft = arrowLeftIcon
  thumbsUp = thumbsUpIcon
  thumbsDown = thumbsDownIcon
  userDetails: UserDetails;
  userQuestions: QuestionDetails[] = []
  userAnsweredQuestions: QuestionDetails[] = []
  currentQuestion: QuestionDetails

  currentTab: string = "ALL"
  currentQuestions: QuestionDetails[] = []

  constructor(private eventService: EventService, private questionService: QuestionService, private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(routeId => {
      this.questionService.getQuestionsByUserId(Number(routeId['id'])).subscribe(res => {
        this.userQuestions = <QuestionDetails[]>res
        this.currentQuestions = this.userQuestions
      });


      this.eventService.on<UserDetails>().subscribe(res => {
        this.userDetails = res
      })
    })
  }

  setTab(tab) {
    if (tab == "ALL") {
      this.currentQuestions = this.userQuestions;
    } else {
      this.currentQuestions = this.userAnsweredQuestions;
    }
    this.currentTab = tab;
    this.currentQuestion = null;
  }

  viewQuestion(i: QuestionDetails) {
    this.currentQuestion = i
  }

}
