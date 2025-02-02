
export const menu = () => {
    content.textContent = ''
    const container = document.createElement('div');
    container.classList.add('container')


    const topic = document.createElement('div');
    topic.classList.add('topic')
    const topicHeadline = document.createElement('h1');
    const topicPara = document.createElement('p');
    topicHeadline.textContent = 'FOOD MENU';
    topicPara.textContent = 'Pauck and lage Restaurant';
    topic.append(topicHeadline,topicPara);
    container.append(topic)
    content.append(container)


    const mainCourse = document.createElement('div');
    mainCourse.classList.add('main-course')

    const mainCourseDetails = document.createElement('div');
    mainCourseDetails.classList.add('detail-container')
    
    const mainCourseTopic = document.createElement('h2');
    mainCourseTopic.textContent = 'Main Course';
    const mainCourseItems = document.createElement('ul');
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container')
    const mainCourseImage = document.createElement('div');
    imageContainer.append(mainCourseImage)
    mainCourseImage.classList.add('food-img')

    const mainCourseOptions = [
        { name: 'Cheeseburger', price: '$34' },
        { name: 'Cheese Sandwich', price: '$22' },
        { name: 'Chicken Burger', price: '$23' },
        { name: 'Spicy Chicken', price: '$33' },
        { name: 'Hot Dog', price: '$24' }
    ];

    mainCourseOptions.forEach(option => {
        const mainCourseList = document.createElement('li');
        mainCourseList.classList.add('item-list');

        const itemList = document.createElement('span');
        itemList.textContent = option.name;

        const priceList = document.createElement('span');
        priceList.textContent = option.price;

        mainCourseList.append(itemList,priceList)

        mainCourseItems.append(mainCourseList)
    })

    mainCourseDetails.append(mainCourseTopic,mainCourseItems)

    mainCourse.append(mainCourseDetails,imageContainer);
    container.append(mainCourse)

    content.append(container)









    const appetizer = document.createElement('div');
    appetizer.classList.add('main-course')

    const appetizerDetails = document.createElement('div');
    appetizerDetails.classList.add('detail-container')
    
    const appetizerTopic = document.createElement('h2');
    appetizerTopic.textContent = 'Apetizer';
    const appetizerItems = document.createElement('ul');
    const imageContainer2 = document.createElement('div');
    imageContainer2.classList.add('img-container')
    const appetizerImage = document.createElement('div');
    imageContainer2.append(appetizerImage)
    appetizerImage.classList.add('app-img')

    const appetizerOptions = [
        { name: 'Fruit Salad', price: '$13' },
        { name: 'Cocktails', price: '$12' },
        { name: 'Nuggets', price: '$14' },
        { name: 'Sandwich', price: '$13' },
        { name: 'French Fries', price: '$15' }
    ];

    appetizerOptions.forEach(option => {
        const appetizerList = document.createElement('li');
        appetizerList.classList.add('item-list');

        const itemList = document.createElement('span');
        itemList.textContent = option.name;

        const priceList = document.createElement('span');
        priceList.textContent = option.price;

        appetizerList.append(itemList,priceList)

        appetizerItems.append(appetizerList)
    })

    appetizerDetails.append(appetizerTopic,appetizerItems)

    appetizer.append(appetizerDetails,imageContainer2);
    container.append(appetizer)

    content.append(container)




    const dessert = document.createElement('div');
    dessert.classList.add('main-course')

    const dessertDetails = document.createElement('div');
    dessertDetails.classList.add('detail-container')
    
    const dessertTopic = document.createElement('h2');
    dessertTopic.textContent = 'Dessert';
    const dessertItems = document.createElement('ul');
    const imageContainer3 = document.createElement('div');
    imageContainer3.classList.add('img-container')
    const dessertImage = document.createElement('div');
    imageContainer3.append(dessertImage)
    dessertImage.classList.add('dess-img')

    const dessertOptions = [
        { name: 'Milk Shake', price: '$3' },
        { name: 'Iced Tea', price: '$2' },
        { name: 'Orange Juice', price: '$4' },
        { name: 'Lemon Tea', price: '$3' },
        { name: 'Coffee', price: '$5' }
    ];

    dessertOptions.forEach(option => {
        const dessertList = document.createElement('li');
        dessertList.classList.add('item-list');

        const itemList = document.createElement('span');
        itemList.textContent = option.name;

        const priceList = document.createElement('span');
        priceList.textContent = option.price;

        dessertList.append(itemList,priceList)

        dessertItems.append(dessertList)
    })

    dessertDetails.append(dessertTopic,dessertItems)

    dessert.append(dessertDetails,imageContainer3);
    container.append(dessert)

    content.append(container)

}