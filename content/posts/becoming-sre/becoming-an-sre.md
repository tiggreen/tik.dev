---
title: Becoming a Site Reliability Engineer (SRE)
date: '2019-11-05'
template: 'post'
draft: false
slug: '/becoming-an-sre'
category: 'Technical, Personal'
tags:
  - 'Technical'
  - 'Personal'
description: 'In 2018, I decided to start a side-business. I got into writing, found my true professional passion, generated around $4000 net revenue, and met great people who inspired and helped me.'
---

<figure><img src="tigran-in-zion.jpg" alt="Tigran in Zion National Park"/><figcaption>I was in Zion National Park this year, and it was awe-inspiring. </figcaption></figure>

## Introduction
They say writing is a form of mediation. Well, I always say it, and I think it’s true. Reflecting on your past and writing down your thoughts is a meditative activity because it helps you ponder on your decisions and become more self-aware. This article is my reflection on a very recent career move that I’ve made. It’s also the contemplations about my past four years at Buffer.

I’ve recently switched careers, from being a product engineer to a [site reliability engineer](https://en.wikipedia.org/wiki/Site_Reliability_Engineering) (SRE). I’ve become [Buffer’s](https://buffer.com) first SRE this year and learned a lot from my experience. I want to share everything I’ve learned along the way, as well as the challenges I faced. If you’re a developer who is thinking about getting into SRE, I’m sure you will find this article very useful.

This is one of the rare instances where I sat down one Saturday morning and finished the first draft in one sitting. There is a lot to cover, and I tried to keep it short but insightful.

Let’s start, shall we?

## Who am I?
My name is Tigran, and I’m a senior software engineer at Buffer. Buffer is a fully remote company with no office. I primarily work from home or a co-working space in NYC. I joined Buffer almost four years ago. I joined as a backend engineer to work in a team called “Buffer for Business.” We have performed a lot of team structuring after I started. My team consisted of a PM, product engineers, a designer, and a data engineer.

Before Buffer, I was in a fin-tech startup based in NYC for a year, and before that, I was at school doing my MS in Computer Science. When I was at school, I did two internships, and one of them was at Twitter. I loved my time at school as I got exposed to a great environment with a bunch of smart people.

Right after joining Buffer, I started to work on backend services that pull and store social media analytics data for our customers. We were a heavy AWS user, and as I was a novice to AWS, I learned a lot about the services running in the cloud. We were using Elastic Beanstack for all our environments, and I got to deploy my first [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) on my first day. It felt amazing to run a Slack command that could deploy my Github PR to our production servers.

As a backend engineer, I worked mostly with PHP and Javascript. I wanted to learn as much as possible about our infrastructure. How was the build system set up on Jenkins, and who wrote the Slack bot that could do things for engineers? How could I spin up a new EC2 instance in our infrastructure? I had so many questions that made me excited about my work.

Then, over time, I transitioned into a full-stack engineering role working with React/Redux and our PHP API. I had to teach myself React so I could help my co-workers build [Buffer Analyze](http://buffer.com/analyze). It was a brand new product that we were planning to launch as part of our multi-product vision. It felt like I was in a startup with a fast pace turnaround and decision making.

Becoming a full-stack engineer also helped me make strides on my side-projects. I could finally build things from zero to production and not struggle with state management or Javascript code. When I started my career, I thought I wanted to be a specialist. My view has changed over time, and I started to grasp the power of being a generalist and how much impact and influence I could have on the company. One day, I could build interactive charts with React and the other day deploy a backend [SQS](https://aws.amazon.com/sqs/) worker or look up the right format of the [Cron schedule](https://crontab.cronhub.io/).

### Breaking down the monolith
In early to mid-2016, we decided to break down our monolithic application into multiple services and embrace Kubernetes. We were confident that it would allow us to move faster and align our engineering work with the multi-product vision we had as a company. At that time, we have worked and had good experience with Docker. [Docker](http://docker.com) entirely powered our local dev environment, and we moved away from [Vagrant](https://www.vagrantup.com/).

As this was in 2016, Kubernetes wasn’t as popular and mainstream as it is now. We knew we were throwing ourselves into a completely new world that has a lot of uncertainties and open questions. We knew that we would face technical challenges that we never encountered before. I remember our CTO Dan, and I would attend local k8s meetups to see how other engineering teams solved problems that we were so keen to find answers for.

Of course, the whole microserver transition part was incremental and involved a lot of experimentation and mistakes. Even with mistakes, looking back now, it turned out to be the right decision. I think, most importantly, we never stopped iterating on our infrastructure and making it more reliable and secure.

As we decided to transition from AWS to Kubernetes, I was one of the early pioneers to advocate for this change. As a product engineer, I saw the value we would get if we could break down our analytics infrastructure into microservices. We could use Kubernetes to orchestrate and manage our entire cloud infrastructure.

- I wanted to separate our Analytics API from the main Buffer API so we could move faster and make our own technical decisions.
- I wanted to build a separate build and CI/CD pipeline for our team so we could move faster. Our deployments would take 4-5 minutes on average, and often it would slow us down. We needed to move faster as a small team.
- I wanted to have a fast roll-back mechanism in place, so in case something went wrong, I could revert my changes quickly. This process would give engineers more confidence and improve our velocity.
Even if we broke something, it wouldn't impact the rest of the products at Buffer. The impact of an incident would be minor because we were building a new product with a low number of paying customers.
- I wanted to not worry about scaling, and even if I had to, it would be just a quick command run from my fancy themed terminal. Kubernetes makes it a breeze to scale your services up and down. It also supports autoscaling based on native and external metrics.

There are many other benefits I could mention here, but I don’t want this list to go on for too long. Instead, I want to focus now on the challenges that created an opportunity for a brand new role at Buffer.

## Why make a role switch?
Until early 2019, I continued to be part of the Buffer Analyze team. I helped my team to move our Analytics data infrastructure from AWS to Kubernetes. We started to build our new features on top of our new cloud infrastructure and launch the product for the public. It was an exciting time to see new users praise Buffer Analyze.

Of course, this didn’t come without the new challenges we started to face as a team. The move from monolithic to microservice architecture increased our infrastructure complexity by several orders of magnitude. The transition introduced major complex problems that one would face working with distributed systems. We needed to think about networking, observability, deployments, and security.

Sometimes, this meant that product engineering teams had to solve some of these common problems instead of focusing on building great products for our customers. This complexity reduced product engineering productivity and team velocity.

I thought this created a need to have a new type of engineer(s) who could be embedded into product teams. This role would help engineers to implement reliability oriented features and educate them about operational best practices, automation, monitoring, and observability. These engineers are usually called SREs (Site Reliability Engineers).

I knew I loved working with developers. I started my [side-project](http://cronhub.io) last year to help developers with Cron job monitoring. My work at Buffer and my personal project helped me to discover my passion for developer productivity and tools. I also knew that I enjoyed being a backend generalist and working on infrastructure type of projects more. I loved writing code but also enjoyed understanding how complex distributed systems work. It’s not a coincidence that I took mainly database and distributed systems courses at RIT and specialized in databases.

Considering my professional interests and the needs of the company, I decided to write a pitch document. I named the document “Tigran’s role change motivation” and shared it with our engineering leadership. Of course, it wasn’t that sudden. I had prior calls with my manager and co-workers, openly sharing the motivation behind my role change. I’m very grateful that we have a very open culture at Buffer, and I felt very supported throughout the entire process of my role transition.

After weeks of discussion and working closely with my manager, we created a role transition plan for me. It was a one- to three-month plan during which I would hand my responsibilities to a newly hired engineer. We also worked together to define what my new role would be in the infrastructure team. We never had an SRE before, so as the first SRE at Buffer, I had to think deeply about my roadmap and future projects.

After two months of preparation and hard work, I gradually handed all my product engineering responsibilities to the product engineer who replaced me in my old team. I was lucky he picked up things very quickly.

In August of 2019, I was a full-time Site Reliability Engineer at Buffer as a part of the infrastructure team. Our team consists of four engineers and one engineering manager. It’s already been three months full of all kinds of emotions and learnings. I got started with my projects, met my new team in person in our product-engineering summit, and started taking more SRE responsibilities.

## What I’m working on as an SRE
Quite often, I see people wondering and asking questions about an SRE’s role in an organization. I don’t think there is a definite answer as the role varies in companies. However, I believe there are common projects that most SREs work on as part of their role. At least, that’s what I learned by talking to other SREs in our industry and attending tech conferences.

Because I like being a generalist, I work across the entire stack of infrastructure. I like juggling multiple projects at the same time; it makes my work more fun and exciting. Working on a vast range of technical problems helps me create mental models that come in handy when thinking about large systems. I like working on various projects because I can use this practice to see the broad picture of the problems I’m trying to solve.

I usually decide what I should work on, but I always consult with my manager. I think as one grows into a more senior role, this becomes inevitable. One does a lot more thinking and less coding. I always try to work on impactful projects, and this was, in part, why I wanted to switch my role. In this way, I could expand my scope of influence at the company. Every problem I tackle is most likely to impact all engineers across multiple teams.

The vision of our team is to make product teams more successful. We treat product teams as our customers. This mindset helps to measure the impact of the projects. Of course, there are urgent tasks that come in occasionally. Still, our goal is to build a reliable infrastructure that gives us a space to work on non-urgent but important projects.

So what am I working on these days?

Currently, my main focus is to solve the common engineering operation challenges with developer tooling. I’m trying to make [Datadog](http://www.datadog.com) and [Bugsnag](http://bugsnag.com) as useful for engineers as possible. We use these tools extensively at Buffer. However, to get the most value from developer tools, one should invest in building the right processes and educate engineers about the workflows that these tools could come in useful.

The impact of improving these workflows is enormous. Imagine if you could build a great system that helps engineers to debug requests faster. If you improve this process by even 10%, that’s 10% times the number of engineers you have in your organization. Now it becomes impressive.

As a site reliability engineer, I’m also always thinking about our incident management and how we could improve the existing process. We have a robust on-call schedule in place, but we don’t have proper run-books yet. We do incident write-ups. I think these write-ups are immensely useful for engineers for learning and knowledge share. I’m very optimistic we can use these write-ups to create our runbooks.

Another fun project I’m working on right now is building a Redis Web UI proxy for our engineers. We use Redis at Buffer for many things, and I think we should make it observable for engineers. My idea is to run [Redis Commander](https://github.com/joeferner/redis-commander) on a Docker container and expose it as an internal tool.

I have plenty of future exciting projects on my roadmap. One of them is implementing [SLOs](https://en.wikipedia.org/wiki/Service-level_objective) (Service Level Objectives) for our core services. SLOs are vital for us because they can support our data-driven decisions about reliability. They are the core of SRE practices.

Some people think that SREs are on-call all the time and don’t usually sleep. Even though it’s helpful when they are around during an incident, they are not required to be. Our goal is to figure out the best practices that help engineers take the right action during an incident. We provide the necessary tools, docs, and environment for incident handling. Incident management can be stressful for any engineer, and it’s critical to have it right.

As part of my new role, I get to work with [Kubernetes](http://kubernetes.io) more extensively. Kubernetes is a cloud technology that I’m particularly excited about because I believe it opens up new opportunities for us to build great things on top of it. I wrote about this topic in detail in another [blog post](https://tik.dev/k8s-is-great). What I think we should do is to build high-level abstractions on top of Kubernetes to hide all the hidden complexities of the system. It can make developers’ lives easier. I see a future where we have plenty of public-facing and internal tools that we built on top of Kubernetes.

All my projects involve extensive communication and collaboration with the rest of the engineers. Working with engineers, understanding their daily challenges, and finding the right solutions for them is incredibly rewarding.

Like any new role, there are many things I don’t know. That’s a good thing because I like to learn and fill my knowledge gaps. I thought it would be useful to write about the skills I aspire to acquire as part of my role as an SRE.

## What I don't know as an SRE
We run a large distributed system, and it comes with challenges we’ve never faced before. One of the reasons I like being an SRE is that it exposes me to a wide range of problems. Now, all the theories I learned in my distributed systems classes at school started to make sense. Knowing the theory and how to apply it in a real work application is an important skill. The challenge is to identify the problem and find the right theory behind it so you can come up with a solution.

I did much reading on how to get into SRE. I wanted to know what to expect as part of my new role when it comes to the technical skills that I needed to acquire. I’ve found that there are multiple skill areas that the SRE domain covers:

- Databases
- Security
- Networking
- Reliability best practices
- Operation systems
- Software engineering
- Monitoring

I agree that this is a lot. Even though being an SRE meant being a broad problem solver, most SREs tend to specialize in one or two of these skills. When you have multiple SREs in one company, you can distribute these skills into multiple buckets depending on engineers’ interests and expertise. When it comes to learning these skills, I try to go breadth-first until it becomes overwhelming. If I had to specialize in something, it would probably be databases, software engineering, and operation systems (OS).

If you want to become an SRE, then I highly recommend you read [Alice Goldfuss’](https://blog.alicegoldfuss.com/) [How to get into SRE](https://blog.alicegoldfuss.com/how-to-get-into-sre/) blog post. It’s a vast assortment of resources you can find useful. I’ve found it to be the most useful resource apart from the well-known [Google’s SRE books](https://landing.google.com/sre/books/). I use the book as more of a reference, depending on the problem I'm currently working on.

I’m a reliability engineer, which implies that I should be an expert in reliability. However, I’m not, and it scares me a bit. If you asked me to define what the reliable and production-ready service is right now, I might be able to recall fuzzy sentences. I want to learn and know all the big and essential ideas behind the reliable and scalable distributed systems. It sounds fascinating.

Reliability is a broad term, and it can mean anything, really. However, there is one definition I’m very fond of that I’d like to quote here. It’s from one of the best technical books I’ve read, *Designing Data-Intensive Applications by Martin Kleppmann*. It defines reliability as follows:

> If all those things together mean “working correctly,” then we can understand reliability as meaning, roughly, “continuing to work correctly, even when things go wrong.”

The thing that could go wrong is a hardware fault, software fault, or a human error. Our goal should be to work with engineers to build systems that anticipate these faults and cope with them. The author calls them fault-tolerant and resilient systems.

Even though I consider myself a product-minded person, I’ve always worked with Product Managers (PM) to define the scope and story of the technical projects. We don’t have a PM in the infrastructure team, so I’m learning to be my own PM and mull over each I idea before I start working on it. I also started to wonder whether it’s common not to have PMs in infrastructure teams. I don’t have a clear answer here, but I think it might be useful in some ways.

A big chunk of the work I do is operational and involves driving engineering change in multiple teams. Even though I like working with a wide range of engineers, being a pioneer of a new engineering process and convincing engineers to adopt a new process is quite challenging. I think that, apart from the technical skills, it requires leadership, clear communication, and sales. In some cases, you should be very persistent with the process you introduce if you believe there is a clear value for it. I’m working on improving these skills so I can become a better advocate for good practices.

Most importantly, I think I’m trying to be okay with not knowing everything. I ask questions, read, and try to become better every day at work. I also make sure not to overwhelm myself with the extensive knowledge available on the Internet. It’s essential to keep a free mental capacity so you can digest everything you learn.

## Conclusion
If you’re a software engineer who is thinking of getting into SRE, then I’m excited for you. SRE is a new discipline and is still actively evolving. Some people are confused about how SRE is different from traditional DevOps engineers. I relate to this question, but maybe it’s a topic for another blog post. In general, if you enjoy working with distributed systems and building reliable platforms for engineers to innovate, then the SRE might be a good fit for you. Most SRE problems are open-ended and require consistent progress towards the goal. There are some days, or even weeks when you might end up not writing a single line of code. You should be okay with that.

My journey of being an SRE is short, and there is so much I don’t know yet. However, I can’t wait to see what the future has to offer.


---
Thanks for reading!

*Once a month or so, I send out an email with my latest writing, thoughts, or anything interesting that I've read. If you want to stay in touch then [you can subscribe](https://tinyletter.com/tigranh) and receive my writing in your inbox.*
