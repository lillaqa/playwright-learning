export const pickStaticUser = () => {
    const pickStaticUser = [
        { email: 'customer@practicesoftwaretesting.com', password: 'welcome01', name: 'Jane Doe' },
        { email: 'customer2@practicesoftwaretesting.com', password: 'welcome01', name: 'Jack Howe' },
        { email: 'customer3@practicesoftwaretesting.com', password: 'pass123', name: 'Bob Smith' }
    ];
    return pickStaticUser[Math.floor(Math.random() * pickStaticUser.length)];
}

