import { Divider } from 'antd';
import { Link } from 'react-router-dom';

import './locations.styles.scss';
import 'antd/dist/antd.css';

const REGIONED_STATES = [
  // 美国东部
  [
    '纽约',
    '上州',
    '宾州',
    '康州',
    '麻州',
    '新泽西',
    '罗得岛',
    '缅因州',
    '佛蒙特',
    '新罕布什尔',
  ],
  // 美国西部
  [
    '洛杉矶',
    '南加州',
    '犹他',
    '内华达',
    '蒙大拿',
    '俄勒冈',
    '爱达荷',
    '怀俄明',
    '科罗拉多',
    '亚利桑那',
    '阿拉斯加',
    '新墨西哥',
    '华盛顿州',
    '夏威夷',
  ],
  // 美国南部
  [
    '佛州',
    '德州',
    '南卡',
    '北卡',
    '马里兰',
    '乔治亚',
    '田纳西',
    '路易斯安娜',
    '肯塔基',
    '特拉华',
    '密西西比',
    '俄克拉荷马',
    '阿肯色',
    '阿拉巴马',
    '弗吉尼亚',
    '西弗吉尼亚',
  ],
  // 美国中部
  [
    '伊州',
    '俄亥俄',
    '密苏里',
    '堪萨斯',
    '爱荷华',
    '密歇根',
    '明尼苏达',
    '南达科他',
    '北达科他',
    '印第安纳',
    '威斯康星',
    '内布拉斯加',
  ],
];

const REGIONS = ['东部', '西部', '南部', '中部'];

function Locations({ setLocationDrawerVisible }) {
  const handleClick = (value) => (_) => {
    setLocationDrawerVisible(false);
    console.log('clicked ', value);
  };

  return (
    <div>
      <Link
        to='/'
        key='全美'
        onClick={handleClick('全美')}
        className='state-name'
      >
        全美
      </Link>
      {REGIONED_STATES.map((region, i) => {
        return (
          <div key={`${region}-container`}>
            <Divider
              orientation='left'
              key={region}
              style={{ color: '#a1a1a1' }}
            >
              {REGIONS[i]}
            </Divider>
            <div
              key={`${region}-grid-container`}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
              }}
            >
              {region.map((state) => (
                <Link
                  to={`/?state=${state}`}
                  className='state-name'
                  key={state}
                  onClick={handleClick(state)}
                >
                  {state}
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Locations;
