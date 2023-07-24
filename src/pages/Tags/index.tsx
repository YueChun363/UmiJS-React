import React, { useEffect } from 'react';
import { connect } from 'umi';

const TAGS = (props) => {
  const { tags, dispatch } = props;
  const list = tags.tagList.list ?? [];
  const getTags = () => {
    dispatch({
      type: 'tags/fetchTags', // model命名空间/方法名
      payload: null,
    });
  };
  useEffect(() => {
    getTags();
  }, []);
  return (
    <div>
      <h2>Tags列表</h2>
      {list.map((item, index) => {
        return <div key={index}>{`名称：${item.name}，值：${item.value}`}</div>;
      })}
    </div>
  );
};

export default connect(({ tags }) => ({ tags }))(TAGS);
