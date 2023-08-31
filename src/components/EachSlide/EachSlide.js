import {useState} from 'react'

import './EachSlide.css'

import SlideContext from '../../Context/SlideContext'

const EachSlide = () => {
  const [headingActive, setHeadingActive] = useState(true)
  const [descriptionActive, setDescriptionActive] = useState(true)

  return (
    <SlideContext.Consumer>
      {value => {
        const {
          initialList,
          activeIndex,
          changeHeading,
          ChangeDescription,
        } = value

        const onBlurDescription = event => {
          if (event.target.value === '') {
            ChangeDescription('Description')
          }
          setDescriptionActive(true)
        }

        const onBlurHeading = event => {
          if (event.target.value === '') {
            changeHeading('Heading')
          }
          setHeadingActive(true)
        }

        const onChangeHeading = event => {
          changeHeading(event.target.value)
        }

        const onChangeDescription = event => {
          ChangeDescription(event.target.value)
        }

        const tabDetails = initialList[activeIndex]
        const {description, heading} = tabDetails

        return (
          <div className="slide-view-container">
            <div className="slide-container">
              {headingActive ? (
                <h1
                  onClick={() => setHeadingActive(false)}
                  className="slide-heading"
                >
                  {heading}
                </h1>
              ) : (
                <input
                  type="text"
                  value={heading}
                  onChange={onChangeHeading}
                  onBlur={onBlurHeading}
                  className="slide-heading-input"
                />
              )}
              {descriptionActive ? (
                <p
                  onClick={() => setDescriptionActive(false)}
                  className="slide-description"
                >
                  {description}
                </p>
              ) : (
                <input
                  type="text"
                  value={description}
                  onChange={onChangeDescription}
                  className="slide-description-input"
                  onBlur={onBlurDescription}
                />
              )}
            </div>
          </div>
        )
      }}
    </SlideContext.Consumer>
  )
}

export default EachSlide
