import React from "react";
import "./InfoPage.css";
import r1 from "./images/r1.svg"; // logo
import mr1 from "./images/mr1.jpg";
import mr2 from "./images/mr2.jpg";
import mr3 from "./images/mr3.jpg";

const InfoPage = () => {
  return (
    <section className="info-page">
      <div className="info-wrapper">
        {/* Left Content - 70% */}
        <div className="info-left">
          <div className="info-container">
            <h1 className="info-title">
              What You Need To Know About Weight Loss Injections
            </h1>

            <p>
              Weight loss injections are treatments created to support weight
              reduction. GLP-1 injections generally include substances that boost
              metabolism and reduce appetite. The most effective weight loss
              medications help you feel full faster while enhancing your body’s
              ability to burn calories, promoting both fat loss and weight
              maintenance. Some of the most popular names include Ozempic,
              Wegovy, Saxenda, and Zepbound.
            </p>

            <p>
              Other popular weight loss medications work by focusing on the
              body’s digestive processes. These injections slow down the
              absorption of food, resulting in a more controlled rise in blood
              sugar levels. By stabilizing blood sugar, they help reduce
              cravings and prevent energy crashes, supporting weight loss
              efforts.
            </p>

            {/* CTA 1 */}
            <div className="cta-section">
              <img
                src={r1}
                alt="Ro Official Logo"
                className="ro-logo-image"
              />
              <div className="special-card__offer">
                Get Started Online for Just $45
              </div>
              <button className="cta-button secondary">Visit Site</button>
            </div>

            <h2>Is Weight Loss Injection Therapy Suitable for You?</h2>
            <p>
              While the leading weight loss injections can be highly effective,
              they are not a universal solution. These treatments are generally
              recommended for individuals who meet specific medical guidelines
              determined by healthcare professionals. Curious if weight loss
              injections are a good fit for you? The services and brands we’ve
              reviewed provide personalized medical consultations and
              assessments, including quizzes, to help determine whether this
              treatment option is suitable for your needs.
            </p>

            <h2>Do Weight Loss Injections Really Work?</h2>
            <p>
              Research and clinical trials have demonstrated that injectable
              weight loss medications such as Ozempic, Wegovy, Saxenda, and
              Zepbound can be highly effective, often resulting in greater
              weight loss compared to relying on diet and exercise alone. As a
              result, these medications are now widely prescribed.
            </p>

            <p>
              A cohort study published in JAMA Network revealed that obese
              participants lost an average of 10.9% of their body weight over
              six months using semaglutide GLP-1 injections. In many instances,
              when these injections are combined with a healthy lifestyle, the
              weight loss percentage can be even higher.
            </p>

            <p>
              It’s important to remember that these are average outcomes and
              weight loss results can differ greatly based on factors such as
              genetics, metabolism, age, diet, and exercise habits. Additionally,
              different types of weight loss medications work through various
              biological mechanisms, which can influence individual results.
            </p>

            <p>
              Setting realistic goals and managing expectations is key, as
              outcomes may vary. While top weight loss injections can be a
              valuable tool, they are most effective when paired with healthy
              lifestyle changes, including a balanced diet and regular physical
              activity.
            </p>

            {/* CTA 2 */}
            <div className="cta-section">
              <img
                src={r1}
                alt="Ro Official Logo"
                className="ro-logo-image"
              />
              <div className="special-card__offer">
                Get Started Online for Just $45
              </div>
              <button className="cta-button secondary">Visit Site</button>
            </div>

            <h2>How to Select the Right Weight Loss Injection Pen</h2>
            <h3>Exploring Your Weight Loss Injection Options</h3>
            <p>
              Today, there are various types of weight loss injections available,
              each designed to help with weight loss through different
              mechanisms. Some injections target appetite suppression, while
              others may focus on enhancing metabolism or regulating blood sugar
              levels. Among the brands we review, you’ll find popular GLP-1
              medications such as Ozempic®, Wegovy®, Mounjaro®, Zepbound®, and
              others.
            </p>

            <p>
              Understanding the specifics of these options can empower you to
              make informed choices. That’s why we provide detailed reviews to
              equip you with the knowledge necessary to select the right service
              without feeling overwhelmed. Let us help you navigate this process
              and find the brand that best meets your unique needs.
            </p>

            <h3>Aligning Your Weight Loss Goals with the Right Treatment</h3>
            <p>
              The ideal weight loss injection for you will depend on your
              individual needs and goals, as everyone is unique. Are you dealing
              with persistent hunger? Is managing blood sugar levels a major
              concern? Do you have any pre-existing medical conditions that
              could affect your eligibility for certain weight loss medications?
              Many of the brands and services we’ve reviewed simplify this
              process by offering professional consultations and prescription
              services. Let them help identify the most effective weight loss
              injection tailored to your specific situation.
            </p>

            {/* CTA 3 */}
            <div className="cta-section">
              <img
                src={r1}
                alt="Ro Official Logo"
                className="ro-logo-image"
              />
              <div className="special-card__offer">
                Get Started Online for Just $45
              </div>
              <button className="cta-button secondary">Visit Site</button>
            </div>

            <h2>Conclusion</h2>
            <p>
              By taking these factors into account, you can make educated
              decisions about whether weight loss injection medications like
              Ozempic or Saxenda are the right option for your weight loss
              journey. It’s essential to gather as much information as possible
              when selecting weight management tools to ensure you pick the best
              product for your individual needs. Browse our comprehensive
              reviews and top recommendations to learn more about the leading
              weight loss medications and compare your choices. Let us help you
              identify the option that works best for you. Start your
              exploration today!
            </p>
          </div>
        </div>

        {/* Right Sidebar - 30% */}
        <aside className="info-right">
          <h2 className="must-read-title">Must Reads</h2>

          <div className="must-read-card">
            <img src={mr1} alt="Exploring GLP-1" />
            <h3>
              Exploring Glp-1 For Weight Loss And Diabetes Management
            </h3>
            <p>
              Picture a hormone that not only assists in regulating your blood
              sugar levels but also supports weight loss.
            </p>
            <span className="read-more">Read More &gt;</span>
          </div>

          <div className="must-read-card">
            <img src={mr2} alt="Personalized Care" />
            <h3>
              Enhancing Your Weight Loss Journey Through Personalized Care
            </h3>
            <p>
              Are you interested in enhancing your weight loss journey through
              personalized care?
            </p>
            <span className="read-more">Read More &gt;</span>
          </div>

          <div className="must-read-card">
            <img src={mr3} alt="Prescription Medications" />
            <h3>Effective Prescription Weight Loss Medications</h3>
            <p>
              In today’s busy world, managing weight can be quite a challenge.
            </p>
            <span className="read-more">Read More &gt;</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default InfoPage;
