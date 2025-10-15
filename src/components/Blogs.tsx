import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

const Blogs = () => {
  const blogs = [
    {
      title: "Parallel Line Branch via SAP for ME",
      link: "https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/parallel-line-branch-via-sap-for-me/ba-p/14065115",
    },
    {
      title: "Quality Assurance Approval & Instant Forward for Transport Requests in S/4HANA Cloud Public Edition",
      link: "https://community.sap.com/t5/product-lifecycle-management-blog-posts-by-sap/quality-assurance-approval-amp-instant-forward-for-transport-requests-in-s/ba-p/13759024",
    },
    {
      title: "Transport Monitoring in SAP S/4HANA Cloud Public Edition using SAP Cloud ALM",
      link: "https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/transport-monitoring-in-sap-s-4hana-cloud-public-edition-using-sap-cloud/ba-p/13952931",
    },
    {
      title: "Amazon Food Delivery Case Study",
      link: "https://medium.com/@divyasharma41196/amazon-food-delivery-93df005ac55a",
    },
  ];

  return (
    <section id="blogs" className="py-24 px-4 md:px-6 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-accent">
            Insights & Writings
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <Card
              key={index}
              className="gradient-card border-border/50 p-8 card-hover shadow-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-[hsl(210_100%_60%)]/20 transition-smooth">
                  <BookOpen className="h-6 w-6 text-primary group-hover:text-[hsl(210_100%_60%)] transition-smooth" />
                </div>
                
                <h3 className="text-xl font-bold font-heading group-hover:text-[hsl(210_100%_60%)] transition-smooth line-clamp-2">
                  {blog.title}
                </h3>
                
                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto text-primary hover:text-[hsl(210_100%_60%)]"
                  asChild
                >
                  <a href={blog.link} target="_blank" className="inline-flex items-center gap-2">
                    Read Article
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:text-[hsl(210_100%_60%)] transition-smooth" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
