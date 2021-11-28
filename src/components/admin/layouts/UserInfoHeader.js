import React from 'react'
import avatar from '../../../assets/images/logo/avatar.png'
const UserInfoHeader = () => {
  return (
    <>
      <div className="page-title-overlap bg-accent pt-4">
        <div className="container d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center pt-2">
          <div className="d-flex align-items-center pb-3">
            <div className="img-thumbnail rounded-circle position-relative flex-shrink-0" style={{ width: "6.375rem" }}>
              <img className="rounded-circle" src={avatar} alt="Rahul More" /></div>
            <div className="ps-3">
              <h3 className="text-light fs-lg mb-0">Rahul More</h3><span className="d-block text-light fs-ms opacity-60 py-1">Full Stack Softwarte engineer</span>
            </div>
          </div>
          <div className="d-flex">
            <div className="text-sm-end me-5">
              <div className="text-light fs-base">Total sales</div>
              <h3 className="text-light">426</h3>
            </div>
            <div className="text-sm-end">
              <div className="text-light fs-base">Seller rating</div>
              <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
              </div>
              <div className="text-light opacity-60 fs-xs">Based on 98 reviews</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserInfoHeader
