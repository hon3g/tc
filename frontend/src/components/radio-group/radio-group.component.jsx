import { Radio } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';

import { STATES } from '../post-list/constants';

import './radio-group.styles.scss';

const NY = ['曼哈顿', '法拉盛', '布鲁伦', '皇后区', '布朗士', '长岛', '史登岛'];

const RadioGroup = () => {
  const { state, city, category } = useParams();
  const navigate = useNavigate();

  const onChange = (e) => {
    if (category) {
      navigate(`/${state}/${e.target.value}/${category}`);
    } else {
      navigate(`/${state}/${e.target.value}`);
    }
  };

  if (state !== '纽约') {
    return (
      <Radio checked={true}>{`${STATES.has(state) ? state : '全美'}`}</Radio>
    );
  }

  return (
    <Radio.Group
      onChange={onChange}
      value={city || '全部'}
      className='radio-group'
    >
      <Radio value={'全部'}>全部</Radio>
      {NY.map((area) => (
        <Radio key={area} value={area}>
          {area}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default RadioGroup;
