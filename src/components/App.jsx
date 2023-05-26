import { useState } from 'react';
import Controls from 'components/Controls/Controls';
import Statistics from 'components/Statistics/Statistic';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';


export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


const countTotalFeedback = () => {
    return good + neutral + bad;
};
  
  
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total !== 0) {
      return +((good / total) * 100).toFixed();
    }
    return 0;
  };

  const onLeaveFeedBack = state => {
    switch (state) {
      case 'good': setGood(state => state + 1);
        break;
      case 'neutral': setNeutral(state => state + 1);
        break;
      case 'bad': setBad(state => state + 1);
        break;
    }
  };

  // const onLeaveFeedBack = state => {
  //   if (state === 'good') {
  //     setGood(state => state + 1);
  //   } else if(state === 'neutral'){
  //     setNeutral(state => state + 1);
  //   } else if(state === 'bad') {
  //     setBad(state => state + 1);
  //   }
  // }

    return (
      <>
        <Section title={'Please leave feedback'}>
          <Controls options={['good', 'neutral', 'bad']} onLeaveFeedBack={onLeaveFeedBack} />
        </Section>
       
        {countTotalFeedback() === 0 ? <Notification message={'There is no feedback'} /> :
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>}
      </>
    );
  
};


  // export class App extends Component {
  //   state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   };

  // countPositiveFeedbackPercentage = () => {
  //   const total = this.countTotalFeedback();
  //   const { good } = this.state;
  //   if (total !== 0) {
  //     return +((good / total) * 100).toFixed();
  //   }
  //   return 0;
  // };

  // onLeaveFeedBack = state => {
  //   this.setState(prevState => ({
  //     [state]: prevState[state] + 1,
  //   }));
  // };

  // render() {
  //   const { good, neutral, bad } = this.state;
  //   const options = Object.keys(this.state);
  //   const total = this.countTotalFeedback();
  //   const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();