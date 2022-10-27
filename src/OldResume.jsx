import React, { useEffect } from 'react';
import './OldResume.css';

function OldResume() {
    return (


        <>

            <body>
                <header>
                    <h1>Blake Smith</h1>
                    <section className="contact">
                        <p><strong>Phone:</strong> (612)715-9132 </p>
                        <p><strong>Email:</strong> blake.smith.mn@gmail.com </p>
                        <p><strong>Address:</strong> 4145 Zarthan AVE S, St. Louis Park MN 55416 </p>
                    </section>

                    <img src="https://i.imgur.com/DxPXsu6.jpeg" alt="Photo of Blake Smith" className="Me" />
                </header>
                <nav>
                    {/* <!-- I really wasn't sure what I would link to in this example --> */}
                </nav>

                <h2>About Me</h2>

                <section className="about">
                    <p>
                        An accomplished professional with years of experience in team leadership, customer service, and sales.
                        Looking to branch out into the growing Tech field and take the next steps on my career journey!
                        <div>
                            This is my first real venture into HTML and CSS and I can't wait to see the progress I can make from this
                            point.
                        </div>
                        <aside>

                        </aside>
                    </p>
                </section>
                <h2>Work History</h2>

                <section className="employers">
                    <h3 className="dates">2020-Present</h3>
                    <h3>Starbucks | <em> Shift Supervisor</em></h3>

                    <ul>
                        <li>Inventory Management, Device & System Maintenance.</li>
                        <li>Assist in Keeping store up to standards for Food Safety and Siren's Eye</li>
                        <li>Work in a fast-paced environment while Multitasking efficiently</li>
                        <li>Maintain knowledge on beverage recipes, and assist in training on new Beverages</li>
                        <li>Follow proper cash handling procedures</li>
                    </ul>

                </section>
                <section className="employers">
                    <h3 className="dates">2017 - 2020</h3>
                    <h3>Fresh Thyme | <em> Dairy & Frozen Manager</em></h3>

                    <ul>
                        <li>Clean, Maintain, and Troubleshoot systems used daily</li>
                        <li>Follow strict food safety guidelines</li>
                        <li>Solve guest and vendor concerns in an efficient, and kind manner</li>
                        <li>Experience with Windows XP and Outlook Systems</li>
                        <li>Additional experience in inventory management, PoS Systems, and ordering systems.</li>
                    </ul>
                </section>
                <section className="employers">
                    <h3 className="dates">2016 - 2017</h3>
                    <h3>MarketSource | <em>Wireless Team Lead</em></h3>
                    <ul>
                        <li>Match and sell guests with the products and services offered</li>
                        <li>Schedule, Train, and Manage employees in a small team setting</li>
                        <li>Handle sensitive personal information in a discreet and professional manner</li>
                        <li>Provide one on one technology support for iOS and Android systems - for guests with varied levels of
                            experience and knowledge</li>
                    </ul>

                </section>
                <section className="employers">
                    <h3 className="dates">2011 - 2016</h3>
                    <h3>Target | <em>Electronics / Customer Service Team</em></h3>

                    <ul>
                        <li>Maintain current product knowledge - including specifics on multiple items</li>
                        <li>Efficiently solve guest issues to drive brand loyalty</li>
                        <li>Match products to customers needs, as well as upsell add-ons</li>
                        <li>Assist with inventory management, as well as following strict Release Date Schedules</li>
                    </ul>
                </section>
            </body>
        </>



    )
}

export default OldResume;