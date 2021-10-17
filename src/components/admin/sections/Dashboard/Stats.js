import React from 'react'

const Stats = () => {
    return (
        <>
            <section class="col-lg-8 pt-lg-4 pb-4 mb-3">
                <div class="pt-2 px-4 ps-lg-0 pe-xl-5">
                    <h2 class="h3 py-2 text-center text-sm-start">Your sales / earnings</h2>
                    <div class="row mx-n2 pt-2">
                        <div class="col-md-4 col-sm-6 px-2 mb-4">
                            <div class="bg-secondary h-100 rounded-3 p-4 text-center">
                                <h3 class="fs-sm text-muted">Earnings (before taxes)</h3>
                                <p class="h2 mb-2">$1,690.<small>50</small></p>
                                <p class="fs-ms text-muted mb-0">Sales 8/1/2021 - 8/15/2021</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 px-2 mb-4">
                            <div class="bg-secondary h-100 rounded-3 p-4 text-center">
                                <h3 class="fs-sm text-muted">Your balance</h3>
                                <p class="h2 mb-2">$1,375.<small>00</small></p>
                                <p class="fs-ms text-muted mb-0">To be paid on 8/15/2021</p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 px-2 mb-4">
                            <div class="bg-secondary h-100 rounded-3 p-4 text-center">
                                <h3 class="fs-sm text-muted">Lifetime earnings</h3>
                                <p class="h2 mb-2">$9,156.<small>74</small></p>
                                <p class="fs-ms text-muted mb-0">Based on list price</p>
                            </div>
                        </div>
                    </div>
                    <div class="row mx-n2">
                        <div class="col-lg-8 px-2">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <h3 class="fs-sm pb-3 mb-3 border-bottom">Sales value, USD <span class="fw-normal fs-xs text-muted">(Past 2 weeks)</span></h3>
                                    <div class="ct-chart ct-perfect-fourth" data-line-chart="{&quot;labels&quot;: [&quot;22 Jul&quot;, &quot;&quot;, &quot;24 Jul&quot;, &quot;&quot;, &quot;26 Jul&quot;, &quot;&quot;, &quot;28 Jul&quot;, &quot;&quot;, &quot;30 Jul&quot;, &quot;&quot;, &quot;01 Aug&quot;, &quot;&quot;, &quot;03 Aug&quot;, &quot;&quot;, &quot;05 Aug&quot;], &quot;series&quot;: [[0, 100, 200, 150, 50, 0, 0, 50, 0, 50, 50, 50, 0, 100, 0]]}"></div>
                                </div>
                            </div>
                            <div class="card mb-4 mb-lg-2">
                                <div class="card-body">
                                    <h3 class="fs-sm pb-3 mb-3 border-bottom">Order count <span class="fw-normal fs-xs text-muted">(Past 2 weeks)</span></h3>
                                    <div class="ct-chart ct-perfect-fourth" data-line-chart="{&quot;labels&quot;: [&quot;22 Jul&quot;, &quot;&quot;, &quot;24 Jul&quot;, &quot;&quot;, &quot;26 Jul&quot;, &quot;&quot;, &quot;28 Jul&quot;, &quot;&quot;, &quot;30 Jul&quot;, &quot;&quot;, &quot;01 Aug&quot;, &quot;&quot;, &quot;03 Aug&quot;, &quot;&quot;, &quot;05 Aug&quot;], &quot;series&quot;: [[0, 2, 4, 3, 1, 0, 0, 1, 0, 1, 1, 1, 0, 2, 0]]}" data-options="{&quot;axisY&quot;: {&quot;onlyInteger&quot;: true}}"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 px-2">
                            <div class="card">
                                <div class="card-body">
                                    <h3 class="fs-sm pb-3 mb-0 border-bottom">Your top countries</h3>
                                    <div class="d-flex justify-content-between align-items-center fs-sm py-2 border-bottom">
                                        <div class="d-flex align-items-start py-1">
                                            <img src="../../../../assets/images/flags/usa.png" width="20" alt="USA" />
                                            <div class="ps-1">United States</div>
                                        </div>
                                        <span>$452</span>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center fs-sm py-2 border-bottom">
                                        <div class="d-flex align-items-start py-1">
                                            <img src="../../../../assets/images/flags/sweden.png" width="20" alt="Sweden" />
                                            <div class="ps-1">Sweden</div>
                                        </div>
                                        <span>$318</span>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center fs-sm py-2 border-bottom">
                                        <div class="d-flex align-items-start py-1">
                                            <img src="../../../../assets/images/flags/india.png" width="20" alt="India" />
                                            <div class="ps-1">India</div>
                                        </div>
                                        <span>$106</span>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center fs-sm py-2 border-bottom">
                                        <div class="d-flex align-items-start py-1">
                                            <img src="../../../../assets/images/flags/france.png" width="20" alt="France" />
                                            <div class="ps-1">France</div>
                                        </div>
                                        <span>$82</span>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center fs-sm py-2 border-bottom">
                                        <div class="d-flex align-items-start py-1">
                                            <img src="../../../../assets/images/flags/argentina.png" width="20" alt="Argentina" />
                                            <div class="ps-1">Argentina</div>
                                        </div>
                                        <span>$40</span>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center fs-sm pt-2">
                                        <div class="d-flex align-items-start py-1">
                                            <img src="../../../../assets/images/flags/south-africa.png" width="20" alt="South Africa" />
                                            <div class="ps-1">South Africa</div>
                                        </div>
                                        <span>$17</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Stats
