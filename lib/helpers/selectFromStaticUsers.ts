export const pickStaticUser = () => {
    const staticUser = [
        { email: 'customer@practicesoftwaretesting.com', password: 'welcome01', name: 'Jane Doe' },
        { email: 'customer2@practicesoftwaretesting.com', password: 'welcome01', name: 'Jack Howe' },
        { email: 'customer3@practicesoftwaretesting.com', password: 'pass123', name: 'Bob Smith' }
    ];
    return staticUser[Math.floor(Math.random() * staticUser.length)];
}

