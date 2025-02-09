﻿using CorporateQnA.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorporateQnA.Services.Interfaces
{
    public interface IAnswerService
    {
        public IEnumerable<AnswerDetails> GetAnswersDetailsByQuestionId(int questionId,int userId);

        public int PostAnswer(Answer answer);

        public bool LikeAnswer(int answerId,int userId);

        public bool DislikeAnswer(int answerId,int userId);

        public bool MarkAsBestSolution(int answerId, int userId);
    }
}
