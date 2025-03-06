import { useDispatch, useSelector } from 'react-redux';
import s from './SerchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectNameFilter);
  
  
  const onSearch = e => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={s.container}>
      <label className={s.searchLabelWrapper}>
        <span className={s.text}>Пошук контакта за ім'ям</span>
        <div className={s.searchInputItem} tabIndex="1">
          <div className={s.searchIcon}>
          </div>
          <input
            className={s.input}
            type="text"
            value={searchQuery}
            onChange={onSearch}
          />
        </div>
      </label>
    </div>
  );
};
export default SearchBox;