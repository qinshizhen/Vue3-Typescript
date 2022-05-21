// 接口： 是一种能力，一种约束而已

(() => {
    // 定义一个接口
    interface IPerson {
        firstName: string;
        lastName: string;
    }
    // 输出姓名
    function showFullName(person: IPerson) {
        return `${person.firstName}_${person.lastName}`
    }
    let person = {
        // 少些一个会有错误提示
        firstName: '东方',
        lastName: '不败',
    }
    console.log(showFullName(person));

})()