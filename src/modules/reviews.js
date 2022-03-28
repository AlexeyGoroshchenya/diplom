export const reviews = () => {

    const commentsContainer = document.querySelector('.comments-container');

    let currentReview = 0;

    const userReviews = [
        {
            name: "Алексей Панкратов",
            text: `Не люблю писать отзывы, но в данном случае решил помочь компании, потому что
            неоднократно обращался в другие организации со своими просьбами, но либо не было
            компетентного сотрудника, либо навязывали стандартные решения. У меня коттедж, и мне
            нужны были нестандартные цветные окна, чтобы не нарушать дизайн интерьера моего
            дома. Еще один момент, после обращения, ко мне загород бесплатно отправили мастера
            для обсуждения моего заказа. Парень отработал на отлично, помог с решением
            технических моментов!`,
            img: "images/users/face4.png",
            id: 1,
        },
        {
            name: "Григорий и Вероника",
            text: `Мы с супругом приобрели квартиру в ипотеку. Жильё было вторичное, соответственно было
            необходимо много что поменять, отремонтировать. В компании «Профремонт», нам
            предложили комплексную услугу на очень хороших условиях. Мы заменили окна,
            установили натяжные потолки, межкомнатные двери, а также заказали большой шкаф-купе
            в нашу комнату. За большой заказ нам предоставили очень хорошую скидку, и сделали
            всё в рассрочку без банка! Очень приятным было внимательное отношение сотрудников
            компании. Спасибо!`,
            img: "images/users/face5.png",
            id: 2,
        },
        {
            name: "Семья Петровых",
            text: `Давно планировали заменить старые окна на новые, но никак не предоставлялось
            возможности, потому что требовалась достаточно большая сумма сразу. Увидели рекламу
            компании «Профремонт», и решили принять участие в их программе. Нам предоставили
            хорошую рассрочку без банка и переплат. И нам удалось поменять окна во всей квартире
            сразу! Считаем, что нам очень повезло.`,
            img: "images/users/face6.png",
            id: 3,
        },
        {
            name: "Алексей Навальный",
            text: `Услугу на очень хороших условиях. Мы заменили окна,
            установили натяжные потолки, межкомнатные двери, а также заказали большой шкаф-купе
            в нашу комнату. За большой заказ нам предоставили очень хорошую скидку, и сделали
            всё в рассрочку без банка! Мы с супругом приобрели квартиру в ипотеку. Жильё было вторичное, соответственно было
            необходимо много что поменять, отремонтировать.`,
            img: "",
            id: 4,
        },
        {
            name: "Григорий и Вероника",
            text: `За большой заказ нам предоставили очень хорошую скидку, и сделали
            всё в рассрочку без банка! Очень приятным было внимательное отношение сотрудников
            компании. Спасибо! Почему бы нам не посмотреть на звезды, если не будет облаков?`,
            img: "images/users/face5.png",
            id: 5,
        },
        {
            name: "Петровы в гриппе",
            text: `Давно планировали заменить старые окна на новые, но никак не предоставлялось
            возможности, потому что требовалась достаточно большая сумма сразу. Увидели рекламу
            компании «Профремонт», и решили принять участие в их программе. Нам предоставили
            хорошую рассрочку без банка и переплат. И нам удалось поменять окна во всей квартире
            сразу! Считаем, что нам очень повезло.`,
            img: "images/users/face4.png",
            id: 6,
        }
    ]

    const render = (index_1, index_2, index_3) => {
        let defaultImg = 'images/users/default.png'
        let userAvatar_1 = (userReviews[index_1].img === '') ? defaultImg : userReviews[index_1].img;
        let userAvatar_2 = (userReviews[index_2].img === '') ? defaultImg : userReviews[index_2].img;
        let userAvatar_3 = (userReviews[index_3].img === '') ? defaultImg : userReviews[index_3].img;

        commentsContainer.innerHTML = `
        <div class="review-margin-bottom row comment-item">
         <div class="col-xs-3 col-sm-2">
            <div class="review-user">
                <img src="${userAvatar_1}" alt="" class="img-responsive avatar">
            </div>
            </div>
         <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-green review-arrow review-arrow-left">
                <p class="text-normal">${userReviews[index_1].name}</p>
                <p>${userReviews[index_1].text}</p>
            </div>
         </div>
        </div>
        <div class="review-margin-bottom row comment-item">
         <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-gray review-arrow review-arrow-right">
                <p class="text-normal">${userReviews[index_2].name}</p>
                <p>${userReviews[index_2].text}</p>
            </div>
         </div>
         <div class="col-xs-3 col-sm-2">
            <div class="review-user">
                <img src="${userAvatar_2}" alt="" class="img-responsive avatar">
            </div>
         </div>
        </div>
        <div class="row comment-item">
          <div class="col-xs-3 col-sm-2">
            <div class="review-user">
                <img src="${userAvatar_3}" alt="" class="img-responsive avatar">
            </div>
           </div>
          <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-orange review-arrow review-arrow-left">
                <p class="text-normal">${userReviews[index_3].name}</p>
                <p>${userReviews[index_3].text}</p>
            </div>
          </div>
        </div>
        `;
    }

    const checkCurrent = () => {
        if (currentReview >= userReviews.length) {
            currentReview = 0
        }
    }

    const rotateReview = () => {
        console.log(
            userReviews[currentReview]
        );
        let first = userReviews[currentReview];
        let second = userReviews[currentReview];
        let third = userReviews[currentReview];
        //render(0, 1, 2);

        currentReview++
        checkCurrent()

        console.log(
            userReviews[currentReview]
        );

        currentReview++
        checkCurrent()

        console.log(
            userReviews[currentReview]
        );

    }
    setInterval(rotateReview, 10000)
    //rotateReview()






}