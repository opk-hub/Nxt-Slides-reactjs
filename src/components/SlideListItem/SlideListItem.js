import './SlideListItem.css'

import SlideContext from '../../Context/SlideContext'

const SlideListItem = ({details, serialNumber}) => (
  <SlideContext.Consumer>
    {value => {
      const {changeActiveTab, activeIndex} = value
      const isActive = activeIndex === serialNumber - 1
      const activeStyling = isActive ? 'active-styling' : ''

      const onClickSlideTab = () => {
        changeActiveTab(serialNumber - 1)
      }

      const {heading, description} = details

      return (
        <li
          className={`slide-list-item ${activeStyling}`}
          onClick={onClickSlideTab}
          testid={`slideTab${serialNumber}`}
        >
          <p className="slide-number">{serialNumber}</p>
          <div className="slide-tab-container">
            <h1 className="tab-heading">{heading}</h1>
            <p className="tab-description">{description}</p>
          </div>
        </li>
      )
    }}
  </SlideContext.Consumer>
)

export default SlideListItem
