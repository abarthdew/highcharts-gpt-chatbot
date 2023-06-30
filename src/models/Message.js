class Message {
  role;
  content;
  chartOptions;

  constructor(role, content, chartOptions) {
    this.role = role;
    this.content = content.trim();
    this.chartOptions = chartOptions;
  }
}

export default Message;
