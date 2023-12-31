import { Route, Routes } from "react-router-dom";

import {
  Attendance,
  Dashboard,
  Employees,
  Memorizing,
  Messages,
  Parents,
  Reciter,
  School,
  Sessions,
  Settings,
  Students,
  StudentsAttendance,
  UserAttendance,
  Teachers,
  TeachersAttendance,
  EmployeesAttendance,
  Reports,
  ReportsAchievement,
  ReportsPerseverance,
  StudentDetailedReport,
  SessionsDetailedReport,
  Statistics,
  StatisticsAchievement,
  StatisticsPerseverance,
  StatisticsProgression,
  StatisticsSessions,
  FinancialAffairs,
  StudentSubscriptions,
  LatePayment,
  FinancialIncomes,
  FinancialExpenses,
  FinancialSalaries,
  FinancialReports,
  FinancialSettings,
  SubscriptionsTypes,
  PayrollTypes,
  ManageExpensesTypes,
  Exams,
  ExamsList,
  ExamsTypes,
  ExamResults,
  ExamsQuestions,
  ExamsCommitteeManagement,
  Website,
  WebsiteInfo,
  WebsiteSliders,
  WebsiteNews,
  WebsitePages,
  WebsiteLogs,
  WebsiteChannel,
  WebsiteAlbums,
  WebsitePhotos,
  WebsiteNumbers,
  WebsiteQuestions,
  WebsiteTrust,
  WebsitePartners,
  WebsiteProgrammaticManagement,
} from "../../pages";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings/school" element={<School />} />
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/parents" element={<Parents />} />
      <Route path="/sessions" element={<Sessions />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/reciter" element={<Reciter />} />
      <Route path="/memorizing" element={<Memorizing />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/attendance/teachers" element={<TeachersAttendance />} />
      <Route path="/attendance/teachers/:id" element={<UserAttendance />} />
      <Route path="/attendance/students" element={<StudentsAttendance />} />
      <Route path="/attendance/students/:id" element={<UserAttendance />} />
      <Route path="/attendance/employees" element={<EmployeesAttendance />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/reports/achievement" element={<ReportsAchievement />} />
      <Route path="/reports/perseverance" element={<ReportsPerseverance />} />
      <Route
        path="/reports/student-detailed-report"
        element={<StudentDetailedReport />}
      />
      <Route
        path="/reports/sessions-detailed-report"
        element={<SessionsDetailedReport />}
      />
      <Route path="/statistics" element={<Statistics />} />
      <Route
        path="/statistics/statistics-achievement"
        element={<StatisticsAchievement />}
      />
      <Route
        path="/statistics/statistics-perseverance"
        element={<StatisticsPerseverance />}
      />
      <Route
        path="/statistics/statistics-achievement-progression"
        element={<StatisticsProgression />}
      />
      <Route
        path="/statistics/statistics-sessions"
        element={<StatisticsSessions />}
      />
      <Route path="financial-affairs" element={<FinancialAffairs />} />
      <Route
        path="/financial-affairs/student-subscriptions"
        element={<StudentSubscriptions />}
      />
      <Route path="/financial-affairs/late-payment" element={<LatePayment />} />
      <Route
        path="/financial-affairs/financial-affairs-incomes"
        element={<FinancialIncomes />}
      />
      <Route
        path="/financial-affairs/financial-affairs-expenses"
        element={<FinancialExpenses />}
      />
      <Route
        path="/financial-affairs/financial-affairs-salaries"
        element={<FinancialSalaries />}
      />

      <Route
        path="/financial-affairs/financial-affairs-reports"
        element={<FinancialReports />}
      />
      <Route
        path="/financial-affairs/financial-affairs-settings"
        element={<FinancialSettings />}
      />
      <Route
        path="/financial-affairs/financial-affairs-settings/subscriptions-types"
        element={<SubscriptionsTypes />}
      />
      <Route
        path="/financial-affairs/financial-affairs-settings/payroll-types"
        element={<PayrollTypes />}
      />
      <Route
        path="/financial-affairs/financial-affairs-settings/manage-expenses-types"
        element={<ManageExpensesTypes />}
      />

      <Route path="/exams" element={<Exams />} />
      <Route path="/exams/exams-list" element={<ExamsList />} />
      <Route path="/exams/exams-types" element={<ExamsTypes />} />
      <Route path="/exams/exam-results" element={<ExamResults />} />
      <Route path="/exams/exams-questions" element={<ExamsQuestions />} />
      <Route
        path="/exams/exams-committee-management"
        element={<ExamsCommitteeManagement />}
      />

      <Route path="/website" element={<Website />} />
      <Route path="/website/website-info" element={<WebsiteInfo />} />
      <Route path="/website/website-sliders" element={<WebsiteSliders />} />
      <Route path="/website/website-news" element={<WebsiteNews />} />
      <Route path="/website/website-pages" element={<WebsitePages />} />
      <Route path="/website/website-logs" element={<WebsiteLogs />} />
      <Route path="/website/website-channel" element={<WebsiteChannel />} />
      <Route path="/website/website-albums" element={<WebsiteAlbums />} />
      <Route path="/website/website-photos" element={<WebsitePhotos />} />
      <Route path="/website/website-numbers" element={<WebsiteNumbers />} />
      <Route path="/website/website-questions" element={<WebsiteQuestions />} />
      <Route path="/website/website-trust" element={<WebsiteTrust />} />
      <Route path="/website/website-partners" element={<WebsitePartners />} />
      <Route
        path="/website/website-programs"
        element={<WebsiteProgrammaticManagement />}
      />
    </Routes>
  );
};

export default MyRoutes;
