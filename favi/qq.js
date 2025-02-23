var time = 10;

if (document.getElementById('year-progress-bar')) {// 判断是否存在进度条元素, 防止重复执行，免得tm控制台里全是报错
    setInterval(updateProgressBars, time); // 每ms更新一次
    }
function setBarsTime(time) {time = time;}

{
function updateProgressBars() {
    try {
        const now = new Date();
        const yearStart = new Date(now.getFullYear(), 0, 1).getTime();
        const yearEnd = new Date(now.getFullYear() + 1, 0, 1).getTime();
        const yearProgress = ((now.getTime() - yearStart) / (yearEnd - yearStart)) * 100;

        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
        const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime();
        const monthProgress = ((now.getTime() - monthStart) / (monthEnd - monthStart)) * 100;

        const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        const dayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime();
        const dayProgress = ((now.getTime() - dayStart) / (dayEnd - dayStart)) * 100;

        const hourStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours()).getTime();
        const hourEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1).getTime();
        const hourProgress = ((now.getTime() - hourStart) / (hourEnd - hourStart)) * 100;

        const minuteProgress = ((now.getSeconds() / 60)) * 100; // 计算已过分钟百分比

        // 更新进度条和文本显示
        updateDisplay('year', yearProgress, 7);
        updateDisplay('month', monthProgress, 6);
        updateDisplay('day', dayProgress, 5);
        updateDisplay('hour', hourProgress, 3);
        updateDisplay('minute', minuteProgress, 2);

    } catch (error) {
        console.error('更新模块：时光飞逝 时发生错误:', error);
    }
}

// 更新显示函数
function updateDisplay(period, progress, decimalPlaces) {
  // 进度条文本，值，精度
    document.getElementById(`${period}-progress`).textContent = progress.toFixed(decimalPlaces) + '%';
    document.getElementById(`${period}-progress-bar`).style.width = progress.toFixed(decimalPlaces) + '%';
}

}
