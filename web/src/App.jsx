import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import Header from "./pages/header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Platform from "./pages/platform/Platform";
import Contact from "./pages/contacts/Contacts";
import Career from "./pages/career/Careers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatsappIcon from "./pages/homeupdate/home/WhatsppIcon";
import TermsAndPrivacyPage from "./pages/termsPrivacy/TermsAndPrivacyPage";
import { ThemeProviders } from "./pages/Theme/ThemeProvider";
import "./pages/Theme/Theme.css";
import { createContext, useState, useEffect } from "react";

import Dashboard from "./layouts/dashboard";
import Team from "./pages/Admin/team";
import ProfileView from "./pages/Admin/profileview";
import ResetPassword from "./pages/Admin/resetPassword";
import Geography from "./components/Geography";
import Line from "./components/Line";
import Bar from "./components/Bar";
import Pie from "./components/Pie";
import Form from "./pages/Admin/form";
import ContactInformation from "./pages/Admin/contact";
import Invoice from "./pages/Admin/inovice";
import CalendarComponent from "./layouts/calendar/calender";
import Faq from "./pages/Admin/faqAdmin/faqAdmin";
import AdminLayout from "./layouts/adminLayout";
import NotFound from "./layouts/NotFound";
import JobForm from "./pages/Admin/jobForm";
import JobManagement from "./pages/Admin/job/jobManagement";
import FeedbackInformation from "./pages/Admin/feedbackInformatio";
import TeamForm from "./pages/Admin/teamForm";
import EmployeeDataGrid from "./pages/Admin/employeeTable";
import EmployeeForm from "./pages/Admin/employeeForm";
import EmployeeInvoiceForm from "./pages/Admin/invoiceForm";

import ChangePassword from "./pages/Admin/changePassword";
import { useSelector } from "react-redux";
import ApplicationTable from "./pages/Admin/ApllicationView";
import ContentWriting from "./components/contentWriting/ContentWritingService";
import CareerTable from "./pages/Admin/careerTable";

import IOSMobileApp from "./components/MobileDevelopment/iosmobile/IOSMobileApp";
import SearchEngine from "./components/searchEngine/SearchEngine";



import RequestForQuotation from "./pages/Admin/quotationTable";

import FooterWrapper from "./pages/footer/FooterWrapper";
import NewsPage from "./pages/news/NewsPage";
import FeatureDetail from "./components/newsportal/FeatureDetail";

import CloudInfrastructure from "./components/cloudInfra/CloudInfrastructure";
import EdgeComputing from "./components/edgeComputing/EdgeComputing";

import CloudMigrationAnalytics from "./components/cloudMigration/CloudMigrationAnylatic";
import MobileDevelopment from "./components/MobileDevelopment/MobileDevelopment";
import AndroidMobileApp from "./components/MobileDevelopment/Android/AndroidMobileApp";
import HybridMobileApp from "./components/MobileDevelopment/Hybrid/HybridMobileApp";
import CloudSolutionPage from "./components/cloudService/CloudSolutionPage";

import ERPComponent from "./components/erpfolder/ErpComponent";

import CMSystemComponent from "./components/cms/CMSComponent";
import CrmSolutions from "./components/crm/CrmSolution";
import SoftwareSolution from "./components/softwareSolution/softwareSolution";
import DigitalMarketUpdate from "./components/DigitalMarketUpdate/DigitalMarketUpdate";

import ExploreTechnologe from "./components/ExploreTechnologie/ExploreTechnologe";
import WebDevelopmentupdate from "./components/webDevelopmentupdate/WebDevelopmentupdate";
import { Import } from "lucide-react";
import AboutPage from "./pages/abouts/AboutPage";
import SpreadUpdate from "./components/spreads/SpreadUpdate";
import TechnologyComponent from "./future/TechnologyComponent";
import Homeupdate from "./pages/homeupdate/homeupdate/Homepageupdate";
import BusinessHero from "./components/business/BusinessHero";
import SoftwareSolutionUpdate from "./components/softwareSolutionUpdate/softwareSolutionUpdate";

import NewsForm from "./pages/Admin/NewsForm";
import NewsTable from "./pages/Admin/NewsTable";
import WebSolutionPage from "./components/WebSolutionPage/WebSolutionPage";
import CurvingCircle from "./future/CurvingCircle";
import CrmFourthSection from "./components/crm/CrmFourthSection/CrmFourthSection";
import AboutUpdated from "./pages/abouts/AboutUpdated";

export const MyContext = createContext();

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/invoice-form" element={<EmployeeInvoiceForm />} />
    <Route path="/team" element={<Team />} />
    <Route path="/career-view" element={<CareerTable />} />
    <Route path="/contacts" element={<ContactInformation />} />
    <Route path="/invoices" element={<Invoice />} />
    <Route path="/form" element={<Form />} />
    <Route path="/emp-view" element={<EmployeeDataGrid />} />
    <Route path="/quot-view" element={<RequestForQuotation />} />
    <Route path="/emp-form" element={<EmployeeForm />} />
    <Route path="/team-form" element={<TeamForm />} />
    <Route path="/news-form" element={<NewsForm />} />
    <Route path="news-view" element={<NewsTable />} />
    <Route path="/job-view" element={<JobManagement />} />
    <Route path="/app-view" element={<ApplicationTable />} />
    <Route path="/feedback-view" element={<FeedbackInformation />} />
    <Route path="/job-form" element={<JobForm />} />
    <Route path="/calendar" element={<CalendarComponent />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/bar" element={<Bar />} />
    <Route path="/pie" element={<Pie />} />
    <Route path="/line" element={<Line />} />
    <Route path="/geography" element={<Geography />} />
    <Route path="/profile" element={<ProfileView />} />
    <Route path="/change-password" element={<ChangePassword />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const PublicRoutes = () => (
  <Routes>
    
    <Route path="/" element={<Homeupdate />} />
    <Route path="/aboutus-1" element={<AboutPage />} />
    <Route path="/aboutus" element={<AboutUpdated />} />

    <Route path="/contact" element={<Contact />} />
    <Route path="/career" element={<Career />} />
   
    <Route path="/platform" element={<Platform />} />
    <Route path="/news" element={<NewsPage />} />
    
    <Route
      path="/services/cloud-infastructure"
      element={<CloudInfrastructure />}
    />
    <Route path="/services/edge-computing" element={<EdgeComputing />} />
    <Route path="/news/:id" element={<FeatureDetail />} />

    <Route path="/termsandprivacy" element={<TermsAndPrivacyPage />} />

    {/* Services Routes */}
   
   
    <Route
      path="/services/website-development"
      element={<WebDevelopmentupdate />}
    />
    <Route path="/services/ios-app-development" element={<IOSMobileApp />} />

    <Route
      path="/services/android-app-development"
      element={<AndroidMobileApp />}
    />
    <Route
      path="/services/hybrid-app-development"
      element={<HybridMobileApp />}
    />
    <Route
      path="/services/software-development-services"
      element={<SoftwareSolutionUpdate />}
    />
    <Route
      path="/services/content-writing-service"
      element={<ContentWriting />}
    />
    <Route path="/services/seo-service" element={<SearchEngine />} />
    <Route path="/services/business-solution" element={<BusinessHero />} />
    <Route
      path="/services/cloud-solution-and-data-migration"
      element={<CloudMigrationAnalytics />}
    />
    <Route
      path="/services/mobile-app-development"
      element={<MobileDevelopment />}
    />

    <Route path="/services/cloud-solution" element={<CloudSolutionPage />} />
    <Route
      path="/services/digital-marketing-services"
      element={<DigitalMarketUpdate />}
    />

    <Route
      path="/services/content-writing-service"
      element={<ContentWriting />}
    />

    <Route path="/custom-software-development" element={<SoftwareSolution />} />
    {/* <Route path="/services/crm-business-solution" element={<CrmSolutions />} /> */}
    <Route path="/services/erp-business-solution" element={<ERPComponent />} />
    <Route
      path="/services/content-management-system"
      element={<CMSystemComponent />}
    />
    <Route path="/services/crm-business-solution" element={<CrmSolutions />} />

    {/* Solutions and Advanced Features */}

    <Route
      path="/services/explore-technologies"
      element={<ExploreTechnologe />}
    />
    <Route path="/product/spreads" element={<SpreadUpdate />} />
    <Route path="*" element={<NotFound />} />
    <Route path="/product/web-solution" element={<WebSolutionPage />} />
    <Route path="/tech" element={<TechnologyComponent />} />
    
  </Routes>
);

function App() {
  const [theme, colorMode] = useMode();
  const [isLogin, setIsLogin] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    isAuthenticated,
    error: authError,
    loading: authLoading,
  } = useSelector((state) => state.auth);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MyContext.Provider value={{ isLogin, setIsLogin }}>
      <ToastContainer />
      <BrowserRouter>
        {/* <ScrollToTop /> */}

        {isLogin ? (
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <AdminLayout>
                <AdminRoutes />
              </AdminLayout>
            </ThemeProvider>
          </ColorModeContext.Provider>
        ) : (
          <ThemeProviders>
            <Header isScrolled={isScrolled} />
            <WhatsappIcon />
            <PublicRoutes />
            {/* <FooterComponent /> */}
            <FooterWrapper />
          </ThemeProviders>
        )}
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
