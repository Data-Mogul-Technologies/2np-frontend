import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

import Create from '../components/customer/AddCustomer.vue'
import CustomerList from '../components/customer/CustomerList.vue'
import View from '../components/customer/ViewCustomer.vue'
import EditCustomer from '../components/customer/EditCustomer.vue'


import ConsultantList from '../components/consultant/ConsultantList.vue'
import AddConsultant from '../components/consultant/AddConsultant.vue'
import ViewConsultant from '../components/consultant/ViewConsultant.vue'
import EditConsultant from '../components/consultant/EditConsultant.vue'

import ConsultantStatusList from '../components/consultant/ConsultantStatusList.vue'
import AddConsultantStatus from '../components/consultant/AddConsultantStatus.vue'
import ViewConsultantStatus from '../components/consultant/ViewConsultantStatus.vue'
import AssignCust from '../components/consultant/AssignCust.vue'

import BusinessList from '../components/business/BusinessList.vue'
import AddBusiness from '../components/business/AddBusiness.vue'
import ViewBusiness from '../components/business/ViewBusiness.vue'

import SportList from '../components/sports/SportList.vue'
import AddSport from '../components/sports/AddSport.vue'
import ViewSport from '../components/sports/ViewSport.vue'

import EventList from '../components/event/EventList.vue'
import AddEvent from '../components/event/AddEvent.vue'
import ViewEvent from '../components/event/ViewEvent.vue'

import EventStatusList from '../components/event/EventStatusList.vue'
import AddEventStatus from '../components/event/AddEventStatus.vue'
import ViewEventStatus from '../components/event/ViewEventStatus.vue'

import EventTypeList from '../components/event/EventTypeList.vue'
import AddEventType from '../components/event/AddEventType.vue'
import ViewEventType from '../components/event/ViewEventType.vue'
import UpcomingEvents from '../components/event/UpcomingEvents.vue'

import CustomerStatusList from '../components/customer/CustomerStatusList.vue'
import AddCustomerStatus from '../components/customer/AddCustomerStatus.vue'
import ViewCustomerStatus from '../components/customer/ViewCustomerStatus.vue'
import NewestCustomers from '../components/customer/NewestCustomers.vue'

import EditService from '../components/service/EditService.vue'

import CustomerTypeList from '../components/customer/CustomerTypeList.vue'
import AddCustomerType from '../components/customer/AddCustomerType.vue'
import ViewCustomerType from '../components/customer/ViewCustomerType.vue'

import ServiceTypeList from '../components/service/ServiceTypeList.vue'
import AddServiceType from '../components/service/AddServiceType.vue'
import ViewServiceType from '../components/service/ViewServiceType.vue'

import ServiceStatusList from '../components/service/ServiceStatusList.vue'
import AddServiceStatus from '../components/service/AddServiceStatus.vue'
import ViewServiceStatus from '../components/service/ViewServiceStatus.vue'

import StateList from '../components/state/StateList.vue'
import AddState from '../components/state/AddState.vue'
import ViewState from '../components/state/ViewState.vue'

import PaymentStatusList from '../components/payment/PaymentStatusList.vue'
import AddPaymentStatus from '../components/payment/AddPaymentStatus.vue'
import ViewPaymentStatus from '../components/payment/ViewPaymentStatus.vue'
import PendingPayments from '../components/payment/PendingPayments.vue'

import PaymentSourceList from '../components/payment/PaymentSourceList.vue'
import AddPaymentSource from '../components/payment/AddPaymentSource.vue'
import ViewPaymentSource from '../components/payment/ViewPaymentSource.vue'

import CustServPayList from '../components/payment/CustServPayList.vue'
import AddCustServPay from '../components/payment/AddCustServPay.vue'
import ViewCustServPay from '../components/payment/ViewCustServPay'

import RegPayList from '../components/payment/RegPayList.vue'
import ViewRegPay from '../components/payment/ViewRegPay.vue'

import FeedbackList from '../components/feedback/FeedbackList.vue'
import AddFeedback from '../components/feedback/AddFeedback.vue'
import ViewFeedback from '../components/feedback/ViewFeedback.vue'

import ProfileStatusList from '../components/profiles/ProfileStatusList.vue'
import AddProfileStatus from '../components/profiles/AddProfileStatus.vue'
import ViewProfileStatus from '../components/profiles/ViewProfileStatus.vue'

import ATProfileList from '../components/profiles/ATProfileList.vue'
import ViewATProfile from '../components/profiles/ViewATProfile.vue'

import DmdProfileList from '../components/profiles/DmdProfileList.vue'
import ViewDmdProfile from '../components/profiles/ViewDmdProfile.vue'

import EditProfile from '../components/profiles/EditProfile.vue'
import PendingProfiles from '../components/profiles/PendingProfiles.vue'

import AddService from '../components/service/AddService.vue'
import AddCustServ from '../components/service/AddCustServ.vue'
import AllCustServ from '../components/service/AllCustServ.vue'

import ProspectDate from '../components/reports/ProspectDate.vue'
import YrRetRateConsult from '../components/reports/YrRetRateConsult.vue'
import LastYrRetRateConsult from '../components/reports/LastYrRetRateConsult.vue'
import CurrYrRetRateConsult from '../components/reports/CurrYrRetRateConsult.vue'
import RetRateCompany from '../components/reports/RetRateCompany.vue'
import EventAttendees from '../components/reports/EventAttendees.vue'
import AnnualPaymentCust from '../components/reports/AnnualPaymentCust'
import ATReportResult from '../components/reports/ATReportResult.vue'
 
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name: 'CustomerList',
    path: '/view/list-customers',
    component: CustomerList
  },
  {
    name: 'Create',
    path: '/create/add-customer',
    component: Create
  },

  {
    name: 'View',
    path: '/view/:id',
    component: View
  },

  {
    name: 'EditCustomer',
    path: '/EditCustomer/:id',
    component: EditCustomer
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
/*----------------Consultant-------------*/
{
  name: 'ConsultantList',
  path: '/page/list-consultants',
  component: ConsultantList
},

{
  name: 'AddConsultant',
  path: '/page/add-new-consultant',
  component: AddConsultant
},
{
  name: 'ViewConsultant',
  path: '/view/consultant-view/:id',
  component: ViewConsultant
},
{
  name: 'EditConsultant',
  path: '/view/consultant-edit/:id',
  component: EditConsultant
},
/*----------------Business-------------*/
{
  name: 'BusinessList',
  path: '/page/list-businesses',
  component: BusinessList
},
{
  name: 'AddBusiness',
  path: '/AddBusiness',
  component: AddBusiness
},
{
  name: 'ViewBusiness',
  path: '/ViewBusiness',
  component: ViewBusiness
},
/*----------------Sport Type-------------*/
{
  name: 'SportList',
  path: '/page/sport-type',
  component: SportList
},
{
  name: 'AddSport',
  path: '/AddSport',
  component: AddSport
},
{
  name: 'ViewSport',
  path: '/ViewSport',
  component: ViewSport
},
/*----------------Event-------------*/
{
  name: 'EventList',
  path: '/event/list-events',
  component: () => import ('../views/AllEvents.vue')
},
{
  name: 'AddEvent',
  path: '/event/add-new-event',
  component: AddEvent
},
{
  name: 'ViewEvent',
  path: '/ViewEvent',
  component: ViewEvent
},
/*----------------Customer Status-------------*/
{
  name: 'CustomerStatusList',
  path: '/page/customer-status',
  component: CustomerStatusList
},
{
  name: 'AddCustomerStatus',
  path: '/AddCustomerStatus',
  component: AddCustomerStatus
},
{
  name: 'ViewCustomerStatus',
  path: '/ViewCustomerStatus',
  component: ViewCustomerStatus
},
/*----------------Consultant Status-------------*/
{
  name: 'ConsultantStatusList',
  path: '/page/consultant-status',
  component: ConsultantStatusList
},
{
  name: 'AddConsultantStatus',
  path: '/AddConsultantStatus',
  component: AddConsultantStatus
},
{
  name: 'ViewConsultantStatus',
  path: '/ViewConsultantStatus',
  component: ViewConsultantStatus
},
/*----------------Event Status-------------*/
{
  name: 'EventStatusList',
  path: '/page/event-status',
  component: EventStatusList
},
{
  name: 'AddEventStatus',
  path: '/AddEventStatus',
  component: AddEventStatus
},
{
  name: 'ViewEventStatus',
  path: '/ViewEventStatus',
  component: ViewEventStatus
},
/*----------------Event Type-------------*/
{
  name: 'EventTypeList',
  path: '/page/event-type',
  component: EventTypeList
},
{
  name: 'AddEventType',
  path: '/AddEventType',
  component: AddEventType
},
{
  name: 'ViewEventType',
  path: '/ViewEventType',
  component: ViewEventType
},

/*----------------Customer Type-------------*/
{
  name: 'CustomerTypeList',
  path: '/page/customer-type',
  component: CustomerTypeList
},
{
  name: 'AddCustomerType',
  path: '/AddCustomerType',
  component: AddCustomerType
},
{
  name: 'ViewCustomerType',
  path: '/ViewCustomerType',
  component: ViewCustomerType
},
/*----------------Service Type-------------*/
{
  name: 'ServiceTypeList',
  path: '/page/service-type',
  component: ServiceTypeList
},
{
  name: 'AddServiceType',
  path: '/AddServiceType',
  component: AddServiceType
},
{
  name: 'ViewServiceType',
  path: '/ViewServiceType',
  component: ViewServiceType
},

{
  name: 'EditService',
  path: '/EditService',
  component: EditService
},
/*----------------Service Status-------------*/
{
  name: 'ServiceStatusList',
  path: '/page/service-status',
  component: ServiceStatusList
},
{
  name: 'AddServiceStatus',
  path: '/AddServiceStatus',
  component: AddServiceStatus
},
{
  name: 'ViewServiceStatus',
  path: '/ViewServiceStatus',
  component: ViewServiceStatus
},
/*----------------Payment Status-------------*/
{
  name: 'PaymentStatusList',
  path: '/page/payment-status',
  component: PaymentStatusList
},
{
  name: 'AddPaymentStatus',
  path: '/AddPaymentStatus',
  component: AddPaymentStatus
},
{
  name: 'ViewPaymentStatus',
  path: '/ViewPaymentStatus',
  component: ViewPaymentStatus
},
/*----------------Payment Source-------------*/
{
  name: 'PaymentSourceList',
  path: '/page/payment-source',
  component: PaymentSourceList
},
{
  name: 'AddPaymentSource',
  path: '/AddPaymentSource',
  component: AddPaymentSource
},
{
  name: 'ViewPaymentSource',
  path: '/ViewPaymentSource',
  component: ViewPaymentSource
},
/*----------------Customer Service Type Payment-------------*/
{
  name: 'CustServPayList',
  path: '/payment/service-payment',
  component: CustServPayList
},
{
  name: 'AddCustServPay',
  path: '/AddCustServPay',
  component: AddCustServPay
},
{
  name: 'ViewCustServPay',
  path: '/ViewCustServPay',
  component: ViewCustServPay
},
/*----------------Registration Payment-------------*/
{
  name: 'RegPayList',
  path: '/payment/event-payment',
  component: RegPayList
},
// {
//   name: 'AddRegPay',
//   path: '/AddRegPay',
//   component: AddRegPay
// },
{
  name: 'ViewRegPay',
  path: '/ViewRegPay',
  component: ViewRegPay
},
/*----------------Feedback Payment-------------*/
{
  name: 'FeedbackList',
  path: '/feedback/feedback',
  component: FeedbackList
},
{
  name: 'AddFeedback',
  path: '/AddFeedback',
  component: AddFeedback
},
{
  name: 'ViewFeedback',
  path: '/ViewFeedback',
  component: ViewFeedback
},
/*----------------Profile Status-------------*/
{
  name: 'ProfileStatusList',
  path: '/page/profile-status',
  component: ProfileStatusList
},
{
  name: 'AddProfileStatus',
  path: '/AddProfileStatus',
  component: AddProfileStatus
},
{
  name: 'ViewProfileStatus',
  path: '/ViewProfileStatus',
  component: ViewProfileStatus
},

//***********Profile Routes***********//

/*--------------State ---------*/
{
  name: 'StateList',
  path: '/page/state',
  component: StateList
},
{
  name: 'AddState',
  path: '/AddState',
  component: AddState
},
{
  name: 'ViewState',
  path: '/ViewState',
  component: ViewState
},
/*---------------State end---------*/
{
  name: 'profiles',
  path: '/profile/all-action-type-profiles',
  component: () => import('../views/AllProfiles.vue')
},

{
  name: 'AddProfile',
  path: '/profile/Add-New-Action-Type-Profile',
  component: () => import('../components/profiles/AddProfile.vue')
},
{
  name: 'AddDMDProfile',
  path: '/profile/Add-New-DMD-Profile',
  component: () => import('../components/profiles/AddDmdProfile.vue')
},
{
  name: 'DmdProfiles',
  path: '/profile/All-DMD-profiles',
  component: () => import('../views/AllDmdProfiles.vue')
},
/*----------- At Profile ------------*/
{
  name: 'ATProfileList',
  path: '/profile/manage-action-types',
  component: ATProfileList
},
{
  name: 'ViewATProfile',
  path: '/ViewATProfile',
  component: ViewATProfile
},
// /*----------- Dmd Profile ------------*/
{
  name: 'DmdProfileList',
  path: '/profile/manage-dm-ds',
  component: DmdProfileList
},
{
  name: 'ViewDmdProfile',
  path: '/ViewDmdProfile',
  component: ViewDmdProfile
},
{
  name: 'EditProfile',
  path: '/EditProfile',
  component: EditProfile
},


{
  name: 'PendingPayments',
  path: '/PendingPayments',
  component: PendingPayments
}
,
{
  name: 'UpcomingEvents',
  path: '/UpcomingEvents',
  component: UpcomingEvents
}
,
{
  name: 'NewestCustomers',
  path: '/NewestCustomers',
  component: NewestCustomers
}
,
{
  name: 'PendingProfiles',
  path: '/PendingProfiles',
  component: PendingProfiles
}
,
{
  name: 'AddService',
  path: '/AddService',
  component: AddService
}
,

{
  name: 'AddCustServ',
  path: '/AddCustServ/:id',
  component: AddCustServ
}
,

{
  name: 'AllCustServ',
  path: '/AllCustServ',
  component: AllCustServ
},
/*-----Reports---- */
{
  name: 'ProspectDate',
  path: '/report/prospect-date',
  component: ProspectDate
},

/*----------- Reports ------------*/
{
  name: 'DMDProfileReport',
  path: '/DMDProfileReport',
  component: () => import('../components/reports/DmdProfileReport.vue')
},
{
  name: 'ATProfileTrend',
  path: '/ATProfileTrend',
  component: () => import('../components/reports/ATProfileTrendReport.vue')
},
{
  name: 'CountATReport',
  path: '/CountATReport',
  component: () => import('../components/reports/ATProfileCountReport.vue')
},
{
  name: 'ReferralSourceReport',
  path: '/ReferralSourceReport',
  component: () => import('../components/reports/ReferalSourceReport.vue')
},
{
  name: 'FeedbackReport',
  path: '/FeedbackReport',
  component: () => import('../components/reports/FeedbackReport.vue')
},
{
  name: 'CustomerFeedback',
  path: '/CustomerFeedback',
  component: () => import('../components/reports/CustomerFeedback.vue')
},
{
  name: 'CustomerFeedback',
  path: '/CustomerFeedback',
  component: () => import('../components/reports/CustomerFeedback.vue')
},
{
  name: 'CustomersPerConsultant',
  path: '/CustomersPerConsultant',
  component: () => import('../components/reports/CustomersPerConsultant.vue')
},
{
  name: 'YrRetRateConsult',
  path: '/report/year-retention-rate',
  component: YrRetRateConsult
},
{
  name: 'LastYrRetRateConsult',
  path: '/report/last-year-retention-rate',
  component: LastYrRetRateConsult
},

{
  name: 'CurrYrRetRateConsult',
  path: '/report/current-year-retention-rate',
  component: CurrYrRetRateConsult
},

{
  name: 'RetRateCompany',
  path: '/report/company-retention-rate',
  component: RetRateCompany
},

{
  name: 'EventAttendees',
  path: '/report/event-attendees',
  component: EventAttendees
},

{
  name: 'AnnualPaymentCust',
  path: '/report/annual-payment',
  component: AnnualPaymentCust
},

{
  name: 'ATReportResult',
  path: '/report/at-report-result',
  component: ATReportResult
},
{
  name: 'AssignCust',
  path: '/AssignCust',
  component: AssignCust
},
{
  name: 'DMDProfileReport',
  path: '/report/dmd-profile-report',
  component: () => import('../components/reports/DmdProfileReport.vue')
},
{
  name: 'ATProfileTrend',
  path: '/report/AT-Profile-Trend',
  component: () => import('../components/reports/ATProfileTrendReport.vue')
},
{
  name: 'CountATReport',
  path: '/report/Count-AT-Report',
  component: () => import('../components/reports/ATProfileCountReport.vue')
},
{
  name: 'ReferralSourceReport',
  path: '/report/Referral-Source-Report',
  component: () => import('../components/reports/ReferalSourceReport.vue')
},
{
  name: 'FeedbackReport',
  path: '/report/Feedback-Report',
  component: () => import('../components/reports/FeedbackReport.vue')
},
{
  name: 'CustomerFeedback',
  path: '/report/Customer-Feedback',
  component: () => import('../components/reports/CustomerFeedback.vue')
},

{
  name: 'CustomersPerConsultant',
  path: '/report/Customers-Per-Consultant',
  component: () => import('../components/reports/CustomersPerConsultant.vue')
}

]

const router = new VueRouter({ mode: 'history', routes: routes })
 

export default router
