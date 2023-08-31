import './SlidesContainer.css'

import SlideListItem from '../SlideListItem/SlideListItem'

import EachSlide from '../EachSlide/EachSlide'

import SlideContext from '../../Context/SlideContext'

const SlidesContainer = () => (
  <SlideContext.Consumer>
    {value => {
      const {initialList} = value
      return (
        <div className="slides-container">
          <ol className="slides-list">
            {initialList.map((eachSlide, index) => (
              <SlideListItem
                details={eachSlide}
                key={eachSlide.id}
                serialNumber={index + 1}
              />
            ))}
          </ol>
          <EachSlide />
        </div>
      )
    }}
  </SlideContext.Consumer>
)

export default SlidesContainer
